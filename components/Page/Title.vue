<script setup>
defineProps({
  title: {
    type: String,
    default: () => "",
  },
});
</script>
<template>
    <h2 class="max-w-max m-4 px-8 py-2 text-2xl rounded-xl bg-base-300 text-center font-semibold">
      {{ title }}
    </h2>
</template>
