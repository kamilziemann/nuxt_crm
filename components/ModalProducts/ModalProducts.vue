<script setup>
import { defineProps, reactive, watch, ref, onMounted } from "vue";

const props = defineProps({
    fields: Array,
    onSubmit: Function,
    isOpen: Boolean,
    onClose: Function,
    title: String,
});

const dialog = ref(null);
const formData = reactive({});
const loading = ref(false);
const error = ref(null);

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
                error.value = null; // Reset error message
            }
        },
        { immediate: true }
    );
});

const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(formData).every(value => value !== '')) {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            props.onSubmit(formData);
            initializeFormData();
            props.onClose();
        }, 2000);
    } else {
        error.value = "Please fill in all fields."; // Error message if any field is empty
    }
};
</script>

<template>
    <dialog ref="dialog" class="modal">
        <div class="modal-box relative">
            <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 gap-4">
                <div class='border-4 rounded-full animate-spin h-12 w-12 aspect-square border-t-indigo-500'></div>
                <div>Adding new product</div>
            </div>
            <h3 class="font-bold text-lg">{{ title }}</h3>
            <form @submit="handleSubmit">
                <div class="form-control w-full max-w-xs" v-for="(field, index) in props.fields" :key="index">
                    <label class="label">
                        <span class="label-text">{{ field.label }}</span>
                    </label>
                    <input v-if="field.type !== 'file'" :type="field.type" v-model="formData[field.model]" :placeholder="field.label" class="input input-bordered w-full max-w-xs"/>
                    <input v-else type="file" @change="handleFileChange($event, field.model)" :placeholder="field.label" class="file-input w-full max-w-xs"/>
                </div>
                <div class="modal-action">
                    <button class="btn" type="submit">Submit</button>
                    <button class="btn" @click="props.onClose" type="button">Close</button>
                </div>
                <p v-if="error" class="text-red-500">{{ error }}</p> <!-- Display error message -->
            </form>
        </div>
    </dialog>
</template>