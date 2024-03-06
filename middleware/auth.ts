const isAuthenticated = async (): Promise<boolean> => {
  const sessionToken = sessionStorage.getItem(SESSION_STORAGE_AUTH_KEY);
  if (sessionToken == null) {
    return false;
  }
  const response = await $fetch("/api/login", {
    method: "GET",
  });

  return response.token === sessionToken;
};

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return;

  if ((await isAuthenticated()) === false) {
    return navigateTo("/login");
  }
});
