import IocContainer from '../IocContainer';
import ApiService from './ApiService';
import CompanyService from './CompanyService';

const iocContainer = new IocContainer();

iocContainer.service(
  'ApiService',
  () => new ApiService(import.meta.env.VITE_BACKEND_URL),
);

iocContainer.service(
  'CompanyService',
  (c:any) => new CompanyService(c.ApiService),
);


export const container = iocContainer;

export default {
  companyService: iocContainer.get('CompanyService'),
}
