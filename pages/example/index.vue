<script setup>
import { ref } from "vue";
import Table from "../components/Table/Table.vue";
import Modal from "../components/Modal/Modal.vue";

const showModal = ref(false);

const fields = [
	{ label: "Name", model: "name" },
	{ label: "Age", model: "age" },
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
	<div class="w-full max-w-[800px] mx-auto mt-10">
		<Table
			:headers="['ID', 'Name', 'Job', 'Favorite Color']"
			:rows="[
				[1, 'Cy Ganderton', 'Quality Control Specialist', 'Blue'],
				[2, 'Hart Hagerty', 'Desktop Support Technician', 'Purple'],
				[3, 'Brice Swyre', 'Tax Accountant', 'Red'],
			]"
			title="Employee Details"
			buttonLabel="Add New Employee"
			:onButtonClick="handleOpen"
		/>
		<Modal
			:isOpen="showModal"
			:fields="fields"
			:onSubmit="submitModalForm"
			:onClose="handleClose"
			:title="`Add New Employee`"
		/>
	</div>
</template>
