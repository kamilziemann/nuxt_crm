<script setup>
const login = ref("");
const password = ref("");
const loading = ref(false);
const error = ref(false);

const loginToBase64 = () => {
  const bytes = new TextEncoder().encode(`${login.value}_${password.value}`);
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
};

const SendLogin = async () => {
  loading.value = true;

  //timespan to simulate waiting for api response
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await $fetch("/api/login", {
    method: "GET",
  });
  if (response.token === loginToBase64()) {
    sessionStorage.setItem("AUTH_KEY", response.token);
    await navigateTo("/");
    error.value = false;
  } else {
    error.value = true;
  }

  loading.value = false;
};
</script>
<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col items-center justify-center gap-5 w-1/4 min-w-64">
      <label class="input input-bordered flex items-center gap-2 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
          />
        </svg>
        <input
          type="text"
          class="grow"
          placeholder="Username"
          :value="login"
          @input="(event) => (login = event.target.value)"
        />
      </label>
      <label class="input input-bordered flex items-center gap-2 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          type="password"
          class="grow"
          :value="password"
          @input="(event) => (password = event.target.value)"
          placeholder="●●●●●●"
        />
      </label>
      <button class="btn btn-outline btn-success w-full" @click="SendLogin">
        <span
          v-if="loading"
          class="loading loading-spinner text-success"
        ></span>
        <span v-else>Login</span>
      </button>
      <p v-if="error" class="text-error">Incorrect login or password</p>
    </div>
  </div>
</template>
<style scoped></style>
