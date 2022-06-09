import IocContainer from '../IocContainer';
import ApiService from './ApiService';
import CompanyService from './CompanyService';
import CompanyServicePathsInterface from './CompanyServicePaths.interface';

const iocContainer = new IocContainer();

iocContainer.service(
  'ApiService',
  () => new ApiService(import.meta.env.VITE_BACKEND_URL),
);

iocContainer.service(
  'CompanyServicePaths',
  (c:any) => {
    return {
      fetch: {
        Method: 'GET',
        Path: "/companies"
      }
    } as CompanyServicePathsInterface
  } 
);

iocContainer.service(
  'CompanyService',
  (c:any) => new CompanyService(c.ApiService, c.CompanyServicePaths),
);


export const container = iocContainer;

export default {
  companyService: iocContainer.get('CompanyService'),
}
