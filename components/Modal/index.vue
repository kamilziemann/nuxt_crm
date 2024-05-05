<script setup>
import { defineProps, reactive, watch, ref, onMounted } from "vue";
const props = defineProps({
  fields: {
    type: Array,
    default: () => [],
  },
  onSubmit: {
    type: Function,
    default: () => () => {},
  },
  isOpen: {
    type: Boolean,
    default: () => false,
  },
  onClose: {
    type: Function,
    default: () => () => {},
  },
  title: {
    type: String,
    default: () => "",
  },
});
const dialog = ref(null);
const formData = reactive({});
const initializeFormData = () => {
	props.fields.forEach((field) => {
		formData[field.model] = "";
	});
};
initializeFormData();
onMounted(() => {
	watch(
		() => props.isOpen,
		(newVal) => {
			if (newVal) {
				dialog.value.showModal();
			} else {
				dialog.value.close();
				initializeFormData();
			}
		},
		{ immediate: true }
	);
});
const handleSubmit = (event) => {
	event.preventDefault();
	props.onSubmit(formData);
	initializeFormData();
	props.onClose();
};
</script>

<template>
	<dialog
		ref="dialog"
		class="modal"
	>
		<div class="modal-box">
			<h3 class="font-bold text-lg">{{ title }}</h3>
			<form @submit="handleSubmit">
				<div
					class="form-control w-full max-w-xs"
					v-for="(field, index) in props.fields"
					:key="index"
				>
					<label class="label">
						<span class="label-text">{{ field.label }}</span>
					</label>
					<input
						type="text"
						v-model="formData[field.model]"
						:placeholder="field.label"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="modal-action">
					<button
						class="btn"
						type="submit"
					>
						Submit
					</button>
					<button
						class="btn"
						@click="props.onClose"
						type="button"
					>
						Close
					</button>
				</div>
			</form>
		</div>
	</dialog>
</template>

