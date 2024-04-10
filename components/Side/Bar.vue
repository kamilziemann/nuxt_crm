<script>
import DashboardIcon from "../../assets/svg/DashboardIcon.vue";
import ProductIcon from "../../assets/svg/ProductIcon.vue";
import CustomersIcon from "../../assets/svg/CustomersIcon.vue";
import IncomeIcon from "../../assets/svg/IncomeIcon.vue";
import PromoteIcon from "../../assets/svg/PromoteIcon.vue";
import HelpIcon from "../../assets/svg/HelpIcon.vue";
export default {
  components: {
    DashboardIcon,
    ProductIcon,
    CustomersIcon,
    IncomeIcon,
    PromoteIcon,
    HelpIcon,
  },
  computed: {
    $style() {
      return {
        link: "flex w-[250px] h-[50px] items-center rounded-[8px] hover:bg-base hover:text-white mt-[10px]",
        text: "ml-[14px] text-[#333] group-hover:text-[#fff]",
      };
    },
  },
};
</script>
<template>
  <div class="h-screen w-[300px] flex flex-col items-center bg-white mr-5">
    <h1 class="text-[26px] text-[#333] p-[20px]">Dashboard</h1>
    <div class="mt-[30px]">
      <NuxtLink to="/home">
        <div :class="$style.link" class="group duration-500">
          <DashboardIcon />
          <p :class="$style.text">Dashboard</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/product">
        <div :class="$style.link" class="group duration-500">
          <ProductIcon />
          <p :class="$style.text">Product</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/customers">
        <div :class="$style.link" class="group duration-500">
          <CustomersIcon />
          <p :class="$style.text">Customers</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/income">
        <div :class="$style.link" class="group duration-500">
          <IncomeIcon />
          <p :class="$style.text">Income</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/promote">
        <div :class="$style.link" class="group duration-500">
          <PromoteIcon />
          <p :class="$style.text">Promote</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/help">
        <div :class="$style.link" class="group duration-500">
          <HelpIcon />
          <p :class="$style.text">Help</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
