import { defineStore } from 'pinia'


import BandModel from '../types/BandModel';
import TimeSlotUpdateModel from '../types/TimeSlotUpdateModel';
import SelectedTimeSlotModel from '../types/SelectedTimeSlotModel';

const useStore = defineStore('store', {
  state: () => {
    return { bands: [] as BandModel[] }
  },
  actions: {
    setBands(bands: BandModel[]) {
      this.bands = bands
    },
    updateTimeSlots(updates: TimeSlotUpdateModel[]) {
      for (let i = 0; i < updates.length; i += 1) {
        const { indices, disabled, selected } = updates[i];
        if (indices.group !== undefined && indices.timeSlot !== undefined) {
          const item = this.bands[indices.band].groups[indices.group].timeSlots[indices.timeSlot];
          item.disabled = disabled;
          item.selected = selected;
        }
      }
    },
    updateSelected(selected: SelectedTimeSlotModel){
      const band = this.bands[selected.bandIndex];
      band.selectedTimeSlot = selected.selected;
    },
  }
});

export default useStore;
