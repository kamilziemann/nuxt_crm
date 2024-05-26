<script setup>
const supabase = useSupabaseClient();
const showModal = ref(false);
const tableData = ref([]);
const loading = ref(false);

const fields = [
  { label: "Name", model: "name" },
  { label: "E-mail", model: "e-mail" },
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

  const response = await supabase.from("users").select("*");
  const transformedUsers = response.data.map((user) => {
    return [user.id, user.first_name + " " + user.last_name, user.email];
  });
  tableData.value = transformedUsers;
  loading.value = false;
};

onMounted(() => fetchData());
</script>

<template>
  <div class="card-normal w-full max-w-[800px] mx-auto mt-10">
    <TableSkeleton
      v-if="loading"
      :headers="['ID', 'Name', 'E-mail']"
      :rowsNumber="3"
      title="Customer details"
      buttonLabel="Add new customer"
    />
    <Table
      v-else
      :headers="['ID', 'Name', 'E-mail']"
      :rows="tableData"
      title="Customer details"
      buttonLabel="Add new customer"
      :onButtonClick="handleOpen"
    />
    <Modal
      :isOpen="showModal"
      :fields="fields"
      :onSubmit="submitModalForm"
      :onClose="handleClose"
      :title="`Add new customer`"
    />
  </div>
</template>
