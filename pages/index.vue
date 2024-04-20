<script setup>
import SummariesHeader from '../components/Header/SummariesHeader.vue';
//
import ProductTable from '~/components/ProductsTable/ProductsTable.vue';
</script>

<template>
  <div class="flex justify-center mt-10 mb-10 w-full">
    <div>
      <SummariesHeader />
      <ProductsTable />
    </div>
  </div>
</template>

<style scoped lang="scss">
h3 {
  span {
    color: green;
  }
}
</style>