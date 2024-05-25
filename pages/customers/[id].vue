<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const customerDetails = ref(null);
const route = useRoute();

const fetchDataForId = async (id) => {
  const data = {
    '1': { 
      customerData: { id: '1', name: 'Deon Banquo', email: 'DeonBanquo@gmail.com', createdAt: '2023-05-12'},
    },
    '2': {
      customerData: { id: '2', name: 'Iancu Ezequiel', email: 'EzequielDestroyer@gmail.com', createdAt: '2023-12-02'},
    },
    '3': {
      customerData: { id: '3', name: 'Tryphosa Maria', email: 'TryphosaMaria@gmail.com', createdAt: '2024-02-20' },
    }
  };
  return data[id] || null;
};

const refreshData = async () => {
  const id = route.params.id;
  const data = await fetchDataForId(id);
  if (data) {
    customerDetails.value = data.customerData;
  } else {
    console.error('No data found for ID:', id);
  }
};

watchEffect(() => {
  refreshData();
});
</script>

<template>
  <div class="w-full max-w-[1000px] mx-auto mt-10">
    <div class="card bg-base-100 shadow-xl m-20" v-if="customerDetails">
      <div class="card-body">
        <h2 class="card-title">Customer ID: {{ customerDetails.id }}</h2>
        <p><strong>Name:</strong> {{ customerDetails.name }}</p>
        <p><strong>Email:</strong> {{ customerDetails.email }}</p>
        <p><strong>Account Created At:</strong> {{ customerDetails.createdAt }}</p>
      </div>
    </div>
  </div>
</template>