<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const orderDetails = ref(null);
const products = ref([]);
const route = useRoute();

const fetchDataForId = async (id) => {
  const data = {
    '1': { 
      orderData: { id: '1', email: 'CyGanderton@gmail.com', price: '30.00€', quantity: '2' },
      products: [
        { id: 1, name: 'Product A', quantity: 1, price: '10.00€' },
        { id: 2, name: 'Product B', quantity: 1, price: '20.00€' }
      ]
    },
    '2': {
      orderData: { id: '2', email: 'HartHagerty@gmail.com', price: '35.00€', quantity: '1' },
      products: [{ id: 3, name: 'Product C', quantity: 1, price: '35.00€' }]
    },
    '3': {
      orderData: { id: '3', email: 'BriceSwyre@gmail.com', price: '26.89€', quantity: '3' },
      products: [
        { id: 4, name: 'Product D', quantity: 1, price: '13.45€' },
        { id: 5, name: 'Product E', quantity: 2, price: '6.72€' }
      ]
    }
  };
  return data[id] || null;
};

const refreshData = async () => {
  const id = route.params.id;
  const data = await fetchDataForId(id);
  if (data) {
    orderDetails.value = data.orderData;
    products.value = data.products;
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
    <div class="card bg-base-100 shadow-xl m-20" v-if="orderDetails">
      <div class="card-body">
        <h2 class="card-title">Order ID: {{ orderDetails.id }}</h2>
        <p><strong>Email:</strong> {{ orderDetails.email }}</p>
        <p><strong>Price:</strong> {{ orderDetails.price }}</p>
        <p><strong>Quantity:</strong> {{ orderDetails.quantity }}</p>
        
      </div>
    </div>
    <ProductList :products="products" />
  </div>
</template>