<script setup>
import StatCard from "./StatCard.vue";
import StatsContainer from "./StatsContainer.vue";

const supabase = useSupabaseClient();
const products = ref(0);
const orders = ref(0);
const customers = ref(0);

// Asynchronous function to fetch data from API and update state
const fetchData = async () => {
  const response = await supabase.from("header_details").select("*");
  const { products_number, orders_number, users_number } =
    response.data[0] ?? {};
  products.value = products_number;
  orders.value = orders_number;
  customers.value = users_number;
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <StatsContainer>
    <!-- Products StatCard -->
    <StatCard
      title="Products"
      :value="products"
      description="12% this month"
      colorFromTo="from-purple-300 to-purple-200"
      svg="ShoppingBasket"
    />

    <!-- Orders StatCard -->
    <StatCard
      title="Orders"
      :value="orders"
      description="21% this month"
      colorFromTo="from-pink-300 to-pink-200"
      svg="Truck"
      valueColor="text-pink-400"
    />

    <!-- Users StatCard -->
    <StatCard
      title="Users"
      :value="customers"
      description="8% this month"
      colorFromTo="from-green-300 to-green-200"
      svg="User"
      valueColor="text-green-400"
    />
  </StatsContainer>
</template>
