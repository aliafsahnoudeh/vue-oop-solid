import TimeSlotModel from './TimeSlotModel';

type SelectedTimeSlotModel = {
  bandIndex: number;
  selected: TimeSlotModel | undefined;
};

export default SelectedTimeSlotModel;
