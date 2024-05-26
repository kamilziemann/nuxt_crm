<script setup>
const supabase = useSupabaseClient();
const order = ref(null);
const products = ref(null);
const route = useRoute();

const fetchData = async () => {
  const orderSummary = await supabase
    .from("order_summary")
    .select()
    .eq("id", route.params.id);
  order.value = orderSummary.data[0];

  const orderDetails = await supabase
    .from("order_details")
    .select()
    .eq("order_id", route.params.id);
  products.value = orderDetails.data.map((product) => {
    return [
      product.product_id,
      product.image,
      product.name,
      product.quantity,
      product.price + " €",
    ];
  });
};

onMounted(() => fetchData());
</script>

<template>
  <div class="w-full max-w-[1000px] mx-auto mt-10">
    <div class="card bg-base-100 shadow-xl m-20" v-if="order">
      <div class="card-body">
        <h2 class="card-title">Order ID: {{ order.id }}</h2>
        <p><strong>Email:</strong> {{ order.email }}</p>
        <p><strong>Price:</strong> {{ order.order_value }}  €</p>
        <p><strong>Quantity:</strong> {{ order.order_quantity }}</p>
      </div>
    </div>
    <TableSkeleton
      v-if="products == null"
      :headers="['ID', 'Image', 'Name', 'Quantity', 'Price']"
      :rowsNumber="3"
      title="Products"
      :showButton="false"
    />
    <Table
      v-else
      :headers="['ID', 'Image', 'Name', 'Quantity', 'Price']"
      :rows="products"
      title="Products"
      :showButton="false"
      routerPath="/products"
    />
  </div>
</template>
