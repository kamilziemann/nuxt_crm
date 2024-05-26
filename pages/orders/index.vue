<script setup>
const supabase = useSupabaseClient();
const showModal = ref(false);
const tableData = ref([]);
const loading = ref(false);

const fields = [
  { label: "E-mail", model: "e-mail" },
  { label: "Price", model: "price" },
  { label: "Quantity", model: "Quantity" },
];
const submitModalForm = (formData) => {
  console.log("Form Data:", formData);
  console.log("Name:", formData.name);
  showModal.value = false;
};
const handleOpen = () => {
  showModal.value = true;
};
const handleClose = () => {
  showModal.value = false;
};

const fetchData = async () => {
  loading.value = true;

  const response = await supabase.from("order_summary").select("*");
  const transformedOrders = response.data.map((order) => {
    return [
      order.id,
      order.email,
      order.order_value + " €",
      order.order_quantity,
    ];
  });
  tableData.value = transformedOrders;
  loading.value = false;
};

onMounted(() => fetchData());
</script>

<template>
  <div class="card-normal w-full max-w-[800px] mx-auto mt-10">
    <TableSkeleton
      v-if="loading"
      :headers="['ID', 'E-mail', 'Price', 'Quantity']"
      :rowsNumber="3"
      title="Orders"
      buttonLabel="Add new order"
    />
    <Table
      v-else
      :headers="['ID', 'E-mail', 'Price', 'Quantity']"
      :rows="tableData"
      title="Orders"
      buttonLabel="Add new order"
      :onButtonClick="handleOpen"
    />
    <Modal
      :isOpen="showModal"
      :fields="fields"
      :onSubmit="submitModalForm"
      :onClose="handleClose"
      :title="`Add new order`"
    />
  </div>
</template>
