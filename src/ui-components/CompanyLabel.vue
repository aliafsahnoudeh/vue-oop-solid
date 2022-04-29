<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ name: string }>();
</script>

<template>
  <div className="title company-label">
      <span className="company-label-text">
        {{ name }}
      </span>
    </div>
</template>