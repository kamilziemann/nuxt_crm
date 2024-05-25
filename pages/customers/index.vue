<script setup>
const showModal = ref(false);

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

</script>

<template>
    <div class="card-normal w-full max-w-[800px] mx-auto mt-10">
        <Table
            :headers="['ID', 'Name','E-mail']"
            :rows="[
                [1, 'Deon Banquo', 'DeonBanquo@gmail.com'],
                [2, 'Iancu Ezequiel', 'EzequielDestroyer@gmail.com'],
                [3, 'Tryphosa Maria', 'TryphosaMaria@gmail.com'],
            ]"
            title="Customer details"
            buttonLabel="Add new customer"
            :onButtonClick="handleOpen"
            @row-click="handleRowClick" 
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