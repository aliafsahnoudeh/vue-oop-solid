<script setup lang="ts">
import Group from "./Group.vue";
import GroupModel from "../types/GroupModel";

defineProps<{
  groups: GroupModel[];
  companyIndex: number;
}>()

</script>

<template>
  <div>
    <Group
      v-for="(group, index) in groups"
        :group="group"
        :key="group.dayLabel"
        :indices="{
          company: companyIndex,
          group: index,
        }"
      />
  </div>
</template>