// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          type: "module",
          src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js",
        },
        {
          nomodule: true,
          src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
