<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => "",
  },
});
const data = ref([]);
const pageTitle = "Produkty";
const fetchUrl = "products";


const fetchData = async () => {
  try {
    const response = await $fetch(`/api/${fetchUrl}`, {
      method: "GET",
    });
    data.value = response;
  } catch (e) {
    //handle error
    // 404 for not found
    // 500 for bad request
  }
};
await fetchData();
</script>
<template>
  <div class="flex flex-col gap-6 w-2/3">
    <PageTitle :title="pageTitle" />
    <PageTable :tableData="data"/>
  </div>
</template>
