<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  rowsNumber: {
    type: Number,
    default: () => 3,
  },
  title: {
    type: String,
    default: () => "",
  },
  buttonLabel: {
    type: String,
    default: () => "",
  },
  showButton: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between items-center mb-4 w-full">
      <h2>{{ title }}</h2>
      <div v-if="showButton" class="btn skeleton :hover-none text-opacity-0">
        {{ buttonLabel }}
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(, rowIndex) in rowsNumber" :key="rowIndex">
            <td v-for="(, cellIndex) in headers" :key="cellIndex">
              <div class="skeleton w-2/3 h-6"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
