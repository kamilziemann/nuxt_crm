<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Total Sales</th>
        </tr>
      </thead>
      <tbody>
        <!-- rows -->
        <tr v-for="(user, index) in paginatedUsers" :key="index">
          <td>
            <div class="flex items-center gap-2">
              <div class="image">
                <img :src="user.image" :alt="`Image of ${user.name}`" />
              </div>
              <div>
                <div class="font-bold">{{ user.name }}</div>
                <div class="text-sm opacity-60">{{ user.description }}</div>
              </div>
            </div>
          </td>
          <td>{{ user.stock }}</td>
          <td>{{ user.price }}</td>
          <td>{{ user.totalSales }}</td>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <!-- Pagination controls -->
      </tfoot>
    </table>
  </div>
</template>

<script>
import usersData from '~/products.json';

export default {
  data() {
    return {
      users: usersData,
      currentPage: 1,
      rowsPerPage: 4
    };
  },
  computed: {
    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.rowsPerPage;
      const endIndex = startIndex + this.rowsPerPage;
      return this.users.slice(startIndex, endIndex);
    }
  }
};
</script>

<style scoped>


.overflow-x-auto {
  width: 35.2rem;
  height: 600px;
  overflow: hidden;
}
.table {
  color: black;
  background-color: white;
  border-radius: 10px;
  border-collapse: collapse;
  top:10px;
}
.table tbody tr:hover {
  background-color: #b8b6b6;
}
.image {
  width: 110px;
  height: 80px;
}
table, th, tr, td {
    border: none;
}
</style>
