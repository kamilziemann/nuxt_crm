<template>
	<div class="w-full">
		<div class="flex justify-between items-center mb-4 w-full">
			<h2>{{ title }}</h2>
			<button
				class="btn"
				@click="onButtonClick"
			>
				{{ buttonLabel }}
			</button>
		</div>
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<th
							v-for="(header, index) in headers"
							:key="index"
						>
							{{ header }}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(row, rowIndex) in rows"
						:key="rowIndex"
						@click="navigate(row[0],row)"
						class="cursor-pointer hover:bg-gray-100"
					>
						<td
							v-for="(cell, cellIndex) in row"
							:key="cellIndex"
              class="max-h-10"
						>
							<template v-if="isImage(cell)">
								<img :src="cell" alt="imgage of product" class="w-10 h-10">
							</template>
							<template v-else>
								<div class="overflow-y-auto max-h-20">{{ cell }}</div>
							</template>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
	headers: Array,
	rows: Array,
	title: String,
	buttonLabel: String,
	onButtonClick: Function,
});

const router = useRouter();

const navigate = (id, data) => {
	router.push({ path: `${router.currentRoute.value.path}/${id}`, query: data });
};

const isImage = (value) => {
	return typeof value === "string" && value.match(/\.(jpeg|jpg|gif|png)$/) != null;
};
</script>