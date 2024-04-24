<script setup>
const route = useRoute();

console.log(route.params.id);
</script>

<template>
	<div class="flex justify-center mt-10 w-full">
		<div>Id of employee: {{ route.params.id }}</div>
	</div>
</template>
