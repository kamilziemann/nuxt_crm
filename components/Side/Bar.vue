<script setup>
import DashboardIcon from "../../assets/svg/DashboardIcon.vue";
import ProductIcon from "../../assets/svg/ProductIcon.vue";
import CustomersIcon from "../../assets/svg/CustomersIcon.vue";
import TruckIcon from "../assets/svg/TruckIcon.vue";
import { SESSION_STORAGE_AUTH_KEY } from "~/utils/keys.ts";

const style = {
  link: "btn flex w-[250px] h-[50px] items-center rounded-[8px] mt-[10px] bg-base-100 justify-start",
  text: "ml-[14px]",
};

const handleLogout = async () => {
  sessionStorage.setItem(SESSION_STORAGE_AUTH_KEY, "");
  await navigateTo("/login");
};
</script>
<template>
  <div
    class="h-screen w-[300px] flex flex-col items-center mr-5 justify-between bg-base-300"
  >
    <div class="flex flex-col items-center">
      <h1 class="text-[26px] p-[20px]">Dashboard</h1>
      <div class="mt-[30px]">
        <NuxtLink to="/">
          <div :class="style.link" class="group duration-500">
            <DashboardIcon />
            <p :class="style.text">Dashboard</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/products">
          <div :class="style.link" class="group duration-500">
            <ProductIcon />
            <p :class="style.text">Products</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/customers">
          <div :class="style.link" class="group duration-500">
            <CustomersIcon />
            <p :class="style.text">Customers</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/orders">
          <div :class="style.link" class="group duration-500">
            <TruckIcon />
            <p :class="style.text">Orders</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col items-center gap-5 w-full">
      <button @click="handleLogout" class="btn btn-outline w-5/6">
        Logout
      </button>
      <div class="flex items-center w-full justify-evenly mb-5">
        <SideToggleMode />
        <SideFontSizer />
      </div>
    </div>
  </div>
</template>
