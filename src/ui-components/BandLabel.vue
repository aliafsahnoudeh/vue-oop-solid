<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ name: string }>();
</script>

<template>
  <div className="title band-label">
      <span className="band-label-text">
        {{ name }}
      </span>
    </div>
</template>