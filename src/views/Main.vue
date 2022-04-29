<script setup lang="ts">
import Layout from "../ui-components/Layout.vue"
import Company from "../ui-components/Company.vue"
import useCompanies from "../logical-components/useCompanies"
import useStore from "../store"
const store = useStore();
const { loading } = useCompanies();

</script>

<template>
  <Layout>
      <div v-if="loading" class="message"> loading </div>
      <template v-else-if="store.companies && store.companies.length > 0">
          <div class="main">
              <Company 
              v-for="(company, index) in store.companies"
              :company="company" :index="index" :key="company.id" />
          </div>
      </template>
      <div v-else class="message">No Data To Show!</div>
    </Layout>
</template>

<style lang="scss" scoped>
@import "./Main.scss";
</style>
