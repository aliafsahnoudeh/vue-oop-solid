import { ref, inject,onMounted, onUnmounted } from "vue";
import ICompanyService from "../services/ICompanyService";
import IServices from "../services/IServices";
import CompanyModel from "../types/CompanyModel";
import ILogicalComponents from "./ILogicalComponents";
import IProcessRawDataService from "./IProcessRawDataService";
import useStore from "../store"

export default function useCompanies() {
    let isMounted = false;
    const loading = ref(false);
    const store = useStore();
    const services = inject<IServices| undefined>('services');
    let companyService: ICompanyService
    if(services !== undefined)
        companyService = services.companyService

    const logicalComponents = inject<ILogicalComponents| undefined>('logical-components');
    let processRawDataService: IProcessRawDataService
    if(logicalComponents !== undefined)
        processRawDataService = logicalComponents.processRawDataService
        
    const fetchCompanies = async (isMounted: boolean) => {
        try {
          loading.value = true
          store.setCompanies(await processRawDataService?.process(await companyService?.fetch()))
        } catch (error) {
            console.error(error)
            store.setCompanies([])
        } finally {
          if (isMounted) { loading.value = false; }
        }
    };

      onMounted(() => {
        isMounted = true;
        fetchCompanies(isMounted);
      });

      onUnmounted(() => {
        isMounted = false;
      });

    return { loading };
}