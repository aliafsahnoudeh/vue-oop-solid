<script setup lang="ts">
import Layout from "../ui-components/Layout.vue"
import Band from "../ui-components/Band.vue"
import useBands from "../logical-components/useBands"
import useStore from "../store"
const store = useStore();
const { loading } = useBands();

</script>

<template>
  <Layout>
      <div v-if="loading" class="message"> loading </div>
      <template v-else-if="store.bands && store.bands.length > 0">
          <div class="main">
              <Band 
              v-for="(band, index) in store.bands"
              :band="band" :index="index" :key="band.id" />
          </div>
      </template>
      <div v-else class="message">No Data To Show!</div>
    </Layout>
</template>

<style lang="scss" scoped>
@import "./Main.scss";
</style>
