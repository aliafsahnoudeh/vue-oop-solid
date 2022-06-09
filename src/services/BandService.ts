import IApiService from './IApiService';
import IBandService from './IBandService';

import RawBandModel from '../types/RawBandModel';
import BandServicePathsInterface from './BandServicePaths.interface';

class BandService implements IBandService {
  private readonly apiService: IApiService;
  private readonly paths: BandServicePathsInterface;

  constructor(apiService: IApiService, bandServicePathsInterface: BandServicePathsInterface) {
    this.apiService = apiService;
    this.paths = bandServicePathsInterface
  }

  public async fetch(): Promise<Array<RawBandModel>> {
    const {
      body,
    } = await this.apiService.request(
      this.paths.fetch.Method,
      this.paths.fetch.Path,
      {},
      {},
    );
    return body;
  }
}

export default BandService;
