const isAuthenticated = async (): Promise<boolean> => {
  const sessionToken = sessionStorage.getItem("AUTH_KEY");
  if (sessionToken == null) {
    return false;
  }
  const response = await $fetch("/api/login", {
    method: "GET",
  });
  if (response.token === sessionToken) {
    return true;
  }
  return false;
};

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return;

  if ((await isAuthenticated()) === false) {
    return navigateTo("/login");
  }
});
