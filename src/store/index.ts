import { defineStore } from 'pinia'


import CompanyModel from '../types/CompanyModel';
import TimeSlotUpdateModel from '../types/TimeSlotUpdateModel';
import SelectedTimeSlotModel from '../types/SelectedTimeSlotModel';

const useStore = defineStore('store', {
  state: () => {
    return { companies: [] as CompanyModel[] }
  },
  actions: {
    setCompanies(companies: CompanyModel[]) {
      this.companies = companies
    },
    updateTimeSlots(updates: TimeSlotUpdateModel[]) {
      for (let i = 0; i < updates.length; i += 1) {
        const { indices, disabled, selected } = updates[i];
        if (indices.group !== undefined && indices.timeSlot !== undefined) {
          const item = this.companies[indices.company].groups[indices.group].timeSlots[indices.timeSlot];
          item.disabled = disabled;
          item.selected = selected;
        }
      }
    },
    updateSelected(selected: SelectedTimeSlotModel){
      const company = this.companies[selected.companyIndex];
      company.selectedTimeSlot = selected.selected;
    },
  }
});

export default useStore;
