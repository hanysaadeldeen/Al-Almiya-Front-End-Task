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
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic",
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
