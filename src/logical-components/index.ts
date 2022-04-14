import IocContainer from '../IocContainer';
import ProcessRawDataService from './ProcessRawDataService';
import BookingService from './BookingService';

const iocContainer = new IocContainer();

iocContainer.service(
  'ProcessRawDataService',
  () => new ProcessRawDataService(),
);

iocContainer.service(
  'BookingService',
  () => BookingService,
);

export default {
  processRawDataService: iocContainer.get('ProcessRawDataService'),
  BookingService: iocContainer.get('BookingService'),
}
