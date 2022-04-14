<script setup lang="ts">
import { provide } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Main from './views/Main.vue'
import services from "./services";
import logicalComponents from "./logical-components";

provide("services", services)
provide("logical-components", logicalComponents)
</script>

<template>
  <Main />
</template>

<style lang="scss" scoped>
@import "./assets/styles/index.scss";
</style>
