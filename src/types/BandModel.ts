import GroupModel from './GroupModel';
import TimeSlotModel from './TimeSlotModel';

type BandModel = {
  id: number;
  name: string;
  type: string;
  groups: GroupModel[];
  selectedTimeSlot: TimeSlotModel | undefined;
};

export default BandModel;
