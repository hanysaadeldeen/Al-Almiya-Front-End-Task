/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        main: "#3162DA",
        stroke: "#F7F7FC",
        subtitle: "#BDBDD3",
        font: "#040404",
        background: "#003773",
        style: "#FF0000",
        light: "#ADB3DA",
      },
    },
  },
  plugins: [],
};
