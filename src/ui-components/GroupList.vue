<script setup lang="ts">
import Group from "./Group.vue";
import GroupModel from "../types/GroupModel";

defineProps<{
  groups: GroupModel[];
  bandIndex: number;
}>()

</script>

<template>
  <div>
    <Group
      v-for="(group, index) in groups"
        :group="group"
        :key="group.dayLabel"
        :indices="{
          band: bandIndex,
          group: index,
        }"
      />
  </div>
</template>