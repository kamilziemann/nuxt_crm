<script setup>
const route = useRoute();
const data=Object.values(route.query);

const [id,imageUrl,productName,productDesc,productQuantity,productPrice] = data

</script>

<template>
	<div class="w-full h-screen flex justify-start items-center flex-col gap-20 box-border">
		<div class="flex justify-start w-full box-border pt-10 pl-5">
			<div>Id of product: {{ route.params.id }}</div>
		</div>
		<div class='flex w-full  justify-center items-start'>
			<div class='w-1/3 gap-6 flex flex-col'>
				<h2 class="text-3xl font-semibold mb-2 box-border">{{ productName }}</h2>
				<img class="aspect-square w-96  rounded-lg shadow-sm" :src="imageUrl" :alt="productName">
			</div>
			<div class="w-1/3  h-full border rounded-2xl p-8 shadow-lg box-border">
			  <div class="flex flex-col h-full">
				<p class="grow overflow-auto">{{ productDesc }}</p>
				<div class='flex flex-col gap-4'>
					<div class="flex justify-between items-center">
						<span >Stock: <span class=" font-bold text-2xl">{{ productQuantity }}</span></span>
					  	<span >Price: <span class=" font-bold text-2xl">{{ productPrice }}$</span></span>
					</div>
				</div>
			  </div>
			</div>
		</div>
  </div>
</template>