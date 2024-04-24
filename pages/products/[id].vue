<script setup>
const data = ref({});
const route = useRoute();
const fetchUrl = "products";
const loadingData = ref(true);

const fetchData = async () => {
  loadingData.value = true;
  try {
    const response = await $fetch(`/api/${fetchUrl}?id=${route.params.id}`, {
      method: "GET",
    });
    data.value = response;
    loadingData.value = false;
  } catch (e) {
    //handle error
    // 404 for not found
    // 500 for bad request
  }
};
await fetchData();
</script>
<template>
  <p>
    {{ data.name }}
  </p>
  <p>
    {{ data.description }}
  </p>
</template>
