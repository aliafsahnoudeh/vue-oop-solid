<script setup lang="ts">
import CardLayout from "./CardLayout.vue";
import TimeSlot from "./TimeSlot.vue";

import GroupModel from "../types/GroupModel";

defineProps<{
 group: GroupModel;
  indices: {
    company: number,
    group: number,
  }
}>()

</script>

<template>
  <CardLayout>
    <div class="title">{{group.dayLabel}}</div>
      <TimeSlot
      v-for="(ts, index) in group.timeSlots"
        :timeSlot="ts"
        :key="ts.startTimestamp"
        :indices="{
          company: indices.company,
          group: indices.group,
          timeSlot: index,
        }"
        :disabled="ts.disabled"
        :selected="ts.selected"
        :label="undefined"
      />
  </CardLayout>
</template>