import RawBandModel from '../types/RawBandModel';
import BandModel from '../types/BandModel';

interface IProcessRawDataService {
  process(rawbands: RawBandModel[]): BandModel[]
}

export default IProcessRawDataService;
