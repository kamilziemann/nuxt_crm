<script setup>
import { ref, onMounted } from 'vue';

// Initialize reactive references for tracking the count of products, orders, and users.
const products = ref(0);
const orders = ref(0);
const customers = ref(0);

// Asynchronous function to fetch data from API and update state
const fetchData = async () => {

    try {
        const responses = await Promise.all([
            fetch('https://fakestoreapi.com/products'), // Fetch list of products
            fetch('https://fakestoreapi.com/carts'), // Fetch list of orders
            fetch('https://fakestoreapi.com/users') // Fetch list of users
        ]);
        const data = await Promise.all(responses.map(res => res.json()));

        // Update the state with the count of products, orders, and users
        products.value = data[0].length;
        orders.value = data[1].length;
        customers.value = data[2].length;
    } catch (error) {
        console.error("There was an error fetching the data", error);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div class="mt-10 flex justify-center">
        <div class="stats stats-horizontal max-[340px]:stats-vertical shadow bg-white">

            
            <div class="stat p-4">
                <div
                    class="stat-figure text-primary flex items-center justify-center rounded-full bg-gradient-to-br from-purple-300 to-purple-200 w-14 h-14 hidden md:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"
                        stroke="oklch(0.57 0.16 276.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-shopping-basket">
                        <path d="m15 11-1 9" />
                        <path d="m19 11-4-7" />
                        <path d="M2 11h20" />
                        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                        <path d="M4.5 15.5h15" />
                        <path d="m5 11 4-7" />
                        <path d="m9 11 1 9" />
                    </svg>
                </div>

                <div class="stat-title">Products</div>
                <div class="stat-value text-primary text-3xl">{{ products }}</div> 
                <div class="stat-desc">12% this month</div>
            </div>

            <div class="stat p-4">
                <div
                    class="stat-figure text-primary flex items-center justify-center rounded-full bg-gradient-to-br from-pink-300 to-pink-200 w-14 h-14 hidden md:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" 
                        stroke="oklch(0.748 0.26 342.55 / 1)" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-truck">
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                        <path d="M15 18H9" />
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                        <circle cx="17" cy="18" r="2" />
                        <circle cx="7" cy="18" r="2" />
                    </svg>
                </div>

                <div class="stat-title">Orders</div>
                <div class="stat-value text-secondary text-3xl">{{ orders }}</div>
                <div class="stat-desc">21% this month</div>
            </div>

            <div class="stat p-4">
                <div
                    class="stat-figure text-primary flex items-center justify-center rounded-full bg-gradient-to-br from-green-300 to-green-200 w-14 h-14 hidden md:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"
                        stroke="rgb(54, 183, 32)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-user">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>

                <div class="stat-title">Users</div>
                <div class="stat-value text-3xl text-red-500" style="color: rgb(54, 183, 32)">{{ customers }}</div>
                <div class="stat-desc">8% this month</div>
            </div>

        </div>
    </div>
</template>
