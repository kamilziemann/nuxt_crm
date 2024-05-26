// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxtjs/supabase"],
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  alias: { "@": resolve(__dirname, "/") },
  css: ["~/assets/main.scss"],
  supabase: {
    redirect: false,
  },
});
