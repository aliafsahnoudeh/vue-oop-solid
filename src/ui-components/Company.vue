<script setup lang="ts">
import CompanyModel from "../types/CompanyModel";
import CompanyLabel from "./CompanyLabel.vue";
import CardLayout from "./CardLayout.vue";
import TimeSlot from "./TimeSlot.vue";
import GroupList from "./GroupList.vue";

defineProps<{
  company: CompanyModel;
  index: number;
}>()

</script>

<template>
  <div className="company">
      <CompanyLabel :name="company.name" :key="company.id" />
      <CardLayout>
        <TimeSlot
          :timeSlot="company.selectedTimeSlot"
          :disabled="false"
          :selected="false"
          :indices="undefined"
          :label="company.selectedTimeSlot !== undefined ? company.selectedTimeSlot.label : undefined"
        />
      </CardLayout>
      <GroupList
        :groups="company.groups"
        :companyIndex="index"
      />
    </div>
</template>