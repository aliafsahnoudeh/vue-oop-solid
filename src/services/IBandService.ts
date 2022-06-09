import RawBandModel from '../types/RawBandModel';

interface IBandService {
  fetch(): Promise<Array<RawBandModel>>;
}

export default IBandService;
