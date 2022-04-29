<script setup lang="ts">
import IndicesModel from '../types/IndicesModel';
import TimeSlotModel from '../types/TimeSlotModel';
import useBooking from '../logical-components/useBooking';

defineProps<{
  timeSlot: TimeSlotModel | undefined;
  indices: IndicesModel | undefined;
  disabled: boolean;
  selected: boolean;
  label: string | undefined;
}>()

const [handleTimeSlotClick] = useBooking();

</script>

<template>
  <button
      type="button"
      :class="
      `${'time-slot'} ${selected ? 'time-slot-selected' : ''}
      ${timeSlot === undefined ? 'time-slot-empty' : ''}
      `"
      @click="handleTimeSlotClick(indices)"
      :disabled="disabled"
    >
        <div v-if="timeSlot">
          <span v-if="label !== undefined">{{label}}</span>
          {' at '}
          <span class="time-slot-start">{{timeSlot.start}}</span>
          {' - '}
          <span class="time-slot-end">{{timeSlot.end}}</span>
        </div>
    </button>
</template>

<style lang="scss" scoped>
@import "./TimeSlot.scss";
</style>
