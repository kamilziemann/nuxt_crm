<script setup>
import { ref, onMounted } from 'vue';
import StatCard from './StatCard.vue';
import StatsContainer from './StatsContainer.vue';

// Initialize reactive references for tracking the count of products, orders, and users.
const products = ref(0);
const orders = ref(0);
const customers = ref(0);

// Asynchronous function to fetch data from API and update state
const fetchData = async () => {

  try {
    const responses = await Promise.all([
      fetch('https://fakestoreapi.com/products'), // Fetch list of products
      fetch('https://fakestoreapi.com/carts'), // Fetch list of orders
      fetch('https://fakestoreapi.com/users') // Fetch list of users
    ]);
    const data = await Promise.all(responses.map(res => res.json()));

    // Update the state with the count of products, orders, and users
    products.value = data[0].length;
    orders.value = data[1].length;
    customers.value = data[2].length;
  } catch (error) {
    console.error("There was an error fetching the data", error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <StatsContainer>
  
    <!-- Products StatCard -->
    <StatCard title="Products" :value="products" description="12% this month" colorFromTo="from-purple-300 to-purple-200"
      svg="ShoppingBasket" breakpoint="sm:flex"/>

    <!-- Orders StatCard -->
    <StatCard title="Orders" :value="orders" description="21% this month" colorFromTo="from-pink-300 to-pink-200"
      svg="Truck" valueColor="text-pink-400" breakpoint="sm:flex" />

    <!-- Users StatCard -->
    <StatCard title="Users" :value="customers" description="8% this month" colorFromTo="from-green-300 to-green-200"
      svg="User" valueColor="text-green-400" breakpoint="sm:flex" />
      
  </StatsContainer>
</template>