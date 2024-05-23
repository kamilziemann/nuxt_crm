<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  rows: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: () => "",
  },
  buttonLabel: {
    type: String,
    default: () => "",
  },
  onButtonClick: {
    type: Function,
    default: () => () => {},
  },
  showButton: {
    type: Boolean,
    default: true,
  },
  routerPath: {
    type: String,
    default: () => useRouter().currentRoute.value.path,
  }
});
const router = useRouter();
const navigate = (id) => {
  router.push(`${props.routerPath}/${id}`);
};
const isImage = (value) => {
  return (
    typeof value === "string" && value.match(/\.(jpeg|jpg|gif|png)$/) != null
  );
};
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between items-center mb-4 w-full">
      <h2>{{ title }}</h2>
      <button v-if="showButton" class="btn" @click="onButtonClick">
        {{ buttonLabel }}
      </button>
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
          <tr
            v-for="(row, rowIndex) in rows"
            :key="rowIndex"
            @click="navigate(row[0])"
            class="cursor-pointer hover:bg-base-300"
          >
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">
              <template v-if="isImage(cell)">
                <img :src="cell" alt="imgage of product" class="w-10 h-10" />
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
