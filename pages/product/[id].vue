<script setup>
const route = useRoute();
const selectedId=route.params.id;

const tableData=[
					[1, 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg', 'ProductName1', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',40,39.99],
					[2, 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg', 'ProductName2', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',20,19.99],
					[3, 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg', 'ProductName3', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',14,59.99],

]
let selectedProduct=tableData.find(v=>v[0] == selectedId)
const [id,img,name,desc,stock,price] = selectedProduct;
</script>

<template>
	<div class="w-full h-screen flex justify-start items-center flex-col gap-20 box-border">
		<div class="flex justify-start w-full box-border pt-10 pl-5">
			<div>Id of product: {{ id }}</div>
		</div>
		<div class='flex w-full  justify-center items-start'>
			<div class='w-1/3 gap-6 flex flex-col'>
				<h2 class="text-3xl font-semibold mb-2 box-border">{{ name }}</h2>
				<img class="aspect-square w-96  rounded-lg shadow-sm" :src="img" :alt="name">
			</div>
			<div class="w-1/3  h-full border rounded-2xl p-8 shadow-lg box-border">
			  <div class="flex flex-col h-full">
				<p class="grow overflow-auto">{{ desc }}</p>
				<div class='flex flex-col gap-4'>
					<div class="flex justify-between items-center">
						<span >Stock: <span class=" font-bold text-2xl">{{ stock }}</span></span>
					  	<span >Price: <span class=" font-bold text-2xl">{{ price }}$</span></span>
					</div>
				</div>
			  </div>
			</div>
		</div>
  </div>
</template>