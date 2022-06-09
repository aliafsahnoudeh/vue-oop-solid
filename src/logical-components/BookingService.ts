// It just does the calculation and doesn't keep any state. We just pass the current state to it and it will use it for calculations and then just returns the result
import IBookingService from './IBookingService';

import BandModel from '../types/BandModel';
import IndicesModel from '../types/IndicesModel';
import TimeSlotUpdateModel from '../types/TimeSlotUpdateModel';
import BookingModel from '../types/BookingModel';
import TimeSlotModel from '../types/TimeSlotModel';

class BookingService implements IBookingService {
  bands: BandModel[];

  constructor(bands: BandModel[]) {
    this.bands = bands;
  }

  // eslint-disable-next-line class-methods-use-this
  hasOverlap(time1: TimeSlotModel | undefined, time2: TimeSlotModel | undefined): boolean {
    if (time1 === undefined || time2 === undefined) return false;

    if (time1.startTimestamp === time2.startTimestamp) return true;
    if (time1.startTimestamp > time2.startTimestamp) {
      if (time1.startTimestamp < time2.endTimestamp) return true;
      return false;
    }
    if (time1.endTimestamp > time2.startTimestamp && time1.endTimestamp <= time2.endTimestamp) return true;
    return false;
  }

  hasOverlapWithAnySelected(indices: IndicesModel, ignoreIndex: number):boolean {
    if (indices.group !== undefined && indices.timeSlot !== undefined) {
      const timeSlot: TimeSlotModel = this.bands[indices.band].groups[indices.group].timeSlots[indices.timeSlot];
      for (let i = 0; i < this.bands.length; i += 1) {
        if (i !== ignoreIndex) {
          if (this.bands[i].selectedTimeSlot !== undefined && (indices.band === i
            || this.hasOverlap(this.bands[i].selectedTimeSlot, timeSlot))) {
            return true;
          }
        }
      }
    }
    return false;
  }

  book(indices: IndicesModel): BookingModel {
    const updates: TimeSlotUpdateModel[] = [];
    updates.push({
      indices,
      disabled: false,
      selected: true,
    });

    if (indices.group === undefined || indices.timeSlot === undefined) {
      return {
        updates: [],
        selected: undefined,
      };
    }

    const groupDate = this.bands[indices.band].groups[indices.group].date.toISOString();
    for (let i = 0; i < this.bands.length; i += 1) {
      const { groups } = this.bands[i];
      for (let k = 0; k < groups.length; k += 1) {
        if (i === indices.band || groups[k].date.toISOString() === groupDate) {
          for (let j = 0; j < groups[k].timeSlots.length; j += 1) {
            if (!(i === indices.band && k === indices.group && j === indices.timeSlot)) {
              if (i === indices.band
            || this.hasOverlap(groups[k].timeSlots[j], this.bands[indices.band].groups[indices.group].timeSlots[indices.timeSlot])) {
                updates.push({
                  indices: {
                    band: i,
                    group: k,
                    timeSlot: j,
                  },
                  disabled: true,
                  selected: false,
                });
              }
            }
          }
        }
      }
    }

    const selected = JSON.parse(JSON.stringify(this.bands[indices.band].groups[indices.group].timeSlots[indices.timeSlot]));
    selected.label = this.bands[indices.band].groups[indices.group].dayLabel;

    return {
      updates,
      selected: {
        selected,
        bandIndex: indices.band,
      },
    };
  }

  remove(indices: IndicesModel): BookingModel {
    const updates: TimeSlotUpdateModel[] = [];
    updates.push({
      indices,
      disabled: false,
      selected: false,
    });
    if (indices.group === undefined || indices.timeSlot === undefined) {
      return {
        updates: [],
        selected: undefined,
      };
    }

    for (let i = 0; i < this.bands.length; i += 1) {
      const { groups } = this.bands[i];
      for (let k = 0; k < groups.length; k += 1) {
        for (let j = 0; j < groups[k].timeSlots.length; j += 1) {
          if (!this.hasOverlapWithAnySelected({ band: i, group: k, timeSlot: j }, indices.band)) {
            updates.push({
              indices: {
                band: i,
                group: k,
                timeSlot: j,
              },
              disabled: false,
              selected: false,
            });
          }
        }
      }
    }

    return {
      updates,
      selected: {
        selected: undefined,
        bandIndex: indices.band,
      },
    };
  }
}

export default BookingService;
