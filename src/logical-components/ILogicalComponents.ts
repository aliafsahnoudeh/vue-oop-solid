import BookingService from "./BookingService";
import IProcessRawDataService from "./IProcessRawDataService";

type ILogicalComponents = {
    BookingService: BookingService
    processRawDataService: IProcessRawDataService
  };

  export default ILogicalComponents