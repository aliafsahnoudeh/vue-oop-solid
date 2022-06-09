import {inject} from "vue"
import useStore from '../store';
import IBookingService from './IBookingService';
import BookingModel from '../types/BookingModel';
import IndicesModel from '../types/IndicesModel';
import ILogicalComponents from "./ILogicalComponents";

function useBooking() {
  const { bands, updateTimeSlots, updateSelected } = useStore();
  const logicalComponents = inject<ILogicalComponents| undefined>('logical-components');
    let bookingService: IBookingService
    if(logicalComponents !== undefined)
      bookingService = new logicalComponents.BookingService(bands);

  const handleTimeSlotClick = (indices: IndicesModel | undefined): void => {
    // TODO some error handling
    if (indices === undefined) return;
    let result:BookingModel = {
      updates: [],
      selected: undefined,
    };
    if (indices.group !== undefined && indices.timeSlot !== undefined) {
      const current = bands[indices.band].groups[indices.group].timeSlots[indices.timeSlot];
      if (current.selected) result = bookingService.remove(indices);
      else if (!current.disabled) result = bookingService.book(indices);
    }

    updateTimeSlots(result.updates);
    if (result.selected !== undefined) { updateSelected(result.selected); }
  };

  return [handleTimeSlotClick];
}

export default useBooking;
