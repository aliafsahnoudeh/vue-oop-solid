import RawTimeSlotModel from './RawTimeSlotModel';

type RawBandModel = {
  id: number;
  name: string;
  type: string;
  time_slots: Array<RawTimeSlotModel>;
};

export default RawBandModel;
