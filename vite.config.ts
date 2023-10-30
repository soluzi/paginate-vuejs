import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/PaginateVuejsPlugin.ts",
      formats: ["es", "cjs"],
      name: "PaginateVuejs",
      fileName: (format) => (format === "es" ? "paginate-vuejs.js" : "paginate-vuejs.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});