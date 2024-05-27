<script setup>
import { useRoute } from "vue-router";

const supabase = useSupabaseClient();
const customerDetails = ref(null);
const route = useRoute();

const fetchData = async () => {
  const customer = await supabase
    .from("users")
    .select()
    .eq("id", route.params.id);
  customerDetails.value = customer.data[0];
};

onMounted(() => fetchData());
</script>

<template>
  <div class="w-full max-w-[1000px] mx-auto mt-10">
    <div class="card bg-base-100 shadow-xl m-20" v-if="customerDetails">
      <div class="card-body">
        <h2 class="card-title">Customer ID: {{ customerDetails.id }}</h2>
        <p><strong>Name:</strong> {{ customerDetails.name }}</p>
        <p><strong>Email:</strong> {{ customerDetails.email }}</p>
        <p>
          <strong>Account Created At:</strong> {{ customerDetails.created_at }}
        </p>
      </div>
    </div>
  </div>
</template>
