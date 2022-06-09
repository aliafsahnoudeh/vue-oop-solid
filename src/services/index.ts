import IocContainer from '../IocContainer';
import ApiService from './ApiService';
import BandService from './BandService';
import BandServicePathsInterface from './BandServicePaths.interface';

const iocContainer = new IocContainer();

iocContainer.service(
  'ApiService',
  () => new ApiService(import.meta.env.VITE_BACKEND_URL),
);

iocContainer.service(
  'BandServicePaths',
  (c:any) => {
    return {
      fetch: {
        Method: 'GET',
        Path: "/bands"
      }
    } as BandServicePathsInterface
  } 
);

iocContainer.service(
  'BandService',
  (c:any) => new BandService(c.ApiService, c.BandServicePaths),
);


export const container = iocContainer;

export default {
  bandService: iocContainer.get('BandService'),
}
