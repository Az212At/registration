import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import path, { resolve } from "path";

export default defineConfig({
  plugins: [vue(), eslintPlugin()],

  server: {
    port: 8081,
  },

  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
    extensions: [".js", ".json", ".vue"],
  },

  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
    sourcemap: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
          @import "@/scss/icons.scss";
          @import "@/scss/mixins.scss";
        `,
      },
    },
  },
});