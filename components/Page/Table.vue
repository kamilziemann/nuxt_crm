<script setup>
const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  itemsPerPage: {
    type: Number,
    default: () => 6,
  },
});

const itemPath = "/products/";
const headers = ["nazwa", "cena", "ilość"];
const currentPage = ref(1);
const pageData = ref([]);

const updatePageData = () => {
  const startIndex = (currentPage.value - 1) * props.itemsPerPage;
  const endIndex = startIndex + props.itemsPerPage;
  pageData.value = props.tableData.slice(startIndex, endIndex);
};

const totalPages = () => {
  return Math.ceil(props.tableData.length / props.itemsPerPage);
};

const changePage = (page) => {
  currentPage.value = page;
  updatePageData();
};

onMounted(() => {
  updatePageData();
});
</script>

<template>
  <div class="overflow-x-auto m-4 p-2 bg-base-300 rounded-lg">
    <table class="table">
      <thead>
        <tr>
          <th v-for="(name, index) in headers" :key="index" class="uppercase"
          >
            {{ name }}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in pageData"
          :key="index"
          class="hover hover:cursor-pointer"
        >
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="item.imageUrl" :alt="item.imageAlt" />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ item.name }}</div>
              </div>
            </div>
          </td>
          <td>{{ item.price }} $</td>
          <td>{{ item.stock }}</td>
          <td>
            <NuxtLink :to="itemPath + item.id" class="btn btn-ghost btn-xs"
              >Szczegóły</NuxtLink
            >
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <nav class="flex pagination gap-4">
              <button
                v-for="page in totalPages()"
                :key="page"
                @click="changePage(page)"
                :class="{ 'btn btn-active': page === currentPage }"
              >
                {{ page }}
              </button>
            </nav>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
