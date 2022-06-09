import IApiService from './IApiService';
import ICompanyService from './ICompanyService';

import RawCompanyModel from '../types/RawCompanyModel';
import CompanyServicePathsInterface from './CompanyServicePaths.interface';

class BandService implements ICompanyService {
  private readonly apiService: IApiService;
  private readonly paths: CompanyServicePathsInterface;

  constructor(apiService: IApiService, companyServicePathsInterface: CompanyServicePathsInterface) {
    this.apiService = apiService;
    this.paths = companyServicePathsInterface
  }

  public async fetch(): Promise<Array<RawCompanyModel>> {
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

export default CompanyService;
