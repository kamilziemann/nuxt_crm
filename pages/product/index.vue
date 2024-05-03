<script setup>
import { ref } from "vue";
import TableProducts from "../components/TableProducts/TableProducts.vue";
import ModalProducts from "../components/ModalProducts/ModalProducts.vue";

const showModal = ref(false);
const dataTable=ref([
					[1, 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg', 'ProductName1', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',40,39.99],
					[2, 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg', 'ProductName2', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',20,19.99],
					[3, 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg', 'ProductName3', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',14,59.99],

])
const fields = [
	{ label: "Product Name", model: "name",type:'text' },
	{ label: "Description", model: "description" ,type:'text'},
	{ label: "Price", model: "price" ,type:'number'},
	{ label: "Stock", model: "stock" ,type:'number'},
	{ label: "Image Link", model: "image",type:'text' },
];

const submitModalForm = (formData) => {
	console.log("Form Data:", formData);
	console.log("Name:", formData.name);
	dataTable.value.push([dataTable.value.length,formData.image,formData.name,formData.description,formData.stock,formData.price])
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
	<div class='overflow-y-auto w-full'>
		<div class="w-full max-w-[800px] mx-auto pt-10 max-h-screen  box-border" >
			<TableProducts
				:headers="['ID','Image', 'Product Name', 'Description', 'Stock','Price']"
				:rows="dataTable"
				title="Products"
				buttonLabel="Add new product"
				:onButtonClick="handleOpen"
			/>
			<ModalProducts
				:isOpen="showModal"
				:fields="fields"
				:onSubmit="submitModalForm"
				:onClose="handleClose"
				:title="`Add new product`"
			/>
		</div>
	</div>
</template>