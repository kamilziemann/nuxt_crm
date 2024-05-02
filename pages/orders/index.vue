<script setup>
import { ref } from "vue";
import Table from "../components/Table/Table.vue";
import Modal from "../components/Modal/Modal.vue";
const showModal = ref(false);

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

</script>

<template>
    <div class="card-normal w-full max-w-[800px] mx-auto mt-10">
        <Table
            :headers="['ID', 'E-mail','Price', 'Quantity']"
            :rows="[
                [1, 'CyGanderton@gmail.com', '30.00€', '2'],
                [2, 'HartHagerty@gmail.com', '35.00€', '5'],
                [3, 'BriceSwyre@gmail.com', '26.90€', '3'],
            ]"
            title="Order details"
            buttonLabel="Add new order"
            :onButtonClick="handleOpen"
            @row-click="handleRowClick" 
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