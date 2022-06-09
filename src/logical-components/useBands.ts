import { ref, inject,onMounted, onUnmounted } from "vue";
import IBandService from "../services/IBandService";
import IServices from "../services/IServices";
import BandModel from "../types/BandModel";
import ILogicalComponents from "./ILogicalComponents";
import IProcessRawDataService from "./IProcessRawDataService";
import useStore from "../store"

export default function useBands() {
    let isMounted = false;
    const loading = ref(false);
    const store = useStore();
    const services = inject<IServices| undefined>('services');
    let bandService: IBandService
    if(services !== undefined)
      bandService = services.bandService

    const logicalComponents = inject<ILogicalComponents| undefined>('logical-components');
    let processRawDataService: IProcessRawDataService
    if(logicalComponents !== undefined)
        processRawDataService = logicalComponents.processRawDataService
        
    const fetchBands = async (isMounted: boolean) => {
        try {
          loading.value = true
          store.setBands(await processRawDataService?.process(await bandService?.fetch()))
        } catch (error) {
            console.error(error)
            store.setBands([])
        } finally {
          if (isMounted) { loading.value = false; }
        }
    };

      onMounted(() => {
        isMounted = true;
        fetchBands(isMounted);
      });

      onUnmounted(() => {
        isMounted = false;
      });

    return { loading };
}