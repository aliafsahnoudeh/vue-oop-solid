<script setup lang="ts">
import BandModel from "../types/BandModel";
import BandLabel from "./BandLabel.vue";
import CardLayout from "./CardLayout.vue";
import TimeSlot from "./TimeSlot.vue";
import GroupList from "./GroupList.vue";

defineProps<{
  band: BandModel;
  index: number;
}>()

</script>

<template>
  <div className="band">
      <BandLabel :name="band.name" :key="band.id" />
      <CardLayout>
        <TimeSlot
          :timeSlot="band.selectedTimeSlot"
          :disabled="false"
          :selected="false"
          :indices="undefined"
          :label="band.selectedTimeSlot !== undefined ? band.selectedTimeSlot.label : undefined"
        />
      </CardLayout>
      <GroupList
        :groups="band.groups"
        :bandIndex="index"
      />
    </div>
</template>