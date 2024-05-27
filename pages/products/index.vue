<script setup>
const supabase = useSupabaseClient();
const showModal = ref(false);
const tableData = ref([]);
const loading = ref(false);

const fields = [
  { label: "Product Name", model: "name" },
  { label: "Description", model: "description" },
  { label: "Price", model: "price" },
  { label: "Stock", model: "stock" },
  { label: "Image Link", model: "image" },
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

  const response = await supabase.from("products").select("*");
  const transformedProducts = response.data.map((product) => {
    return [
      product.id,
      product.image,
      product.name,
      product.description,
      product.quantity,
      product.price + " €",
    ];
  });
  tableData.value = transformedProducts;
  loading.value = false;
};

onMounted(() => fetchData());
</script>

<template>
  <div class="overflow-y-auto w-full">
    <div class="w-full max-w-[800px] mx-auto pt-10 max-h-screen box-border">
      <TableSkeleton
        v-if="loading"
        :headers="[
          'ID',
          'Image',
          'Product Name',
          'Description',
          'Stock',
          'Price',
        ]"
        :rowsNumber="3"
        title="Products"
        buttonLabel="Add new product"
      />
      <Table
        v-else
        :headers="[
          'ID',
          'Image',
          'Product Name',
          'Description',
          'Stock',
          'Price',
        ]"
        :rows="tableData"
        title="Products"
        buttonLabel="Add new product"
        :onButtonClick="handleOpen"
      />
      <Modal
        :isOpen="showModal"
        :fields="fields"
        :onSubmit="submitModalForm"
        :onClose="handleClose"
        :title="`Add new product`"
      />
    </div>
  </div>
</template>
