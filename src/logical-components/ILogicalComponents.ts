import ConstructableInterface from "./Constructable.interface";
import BookingService from "./BookingService";
import IProcessRawDataService from "./IProcessRawDataService";

type ILogicalComponents = {
  BookingService: ConstructableInterface<BookingService>
  processRawDataService: IProcessRawDataService
};

export default ILogicalComponents