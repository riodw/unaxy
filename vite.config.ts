import { fileURLToPath, URL } from "url";
import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    eslintPlugin(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: [{ dir: "src/pages", baseRoute: "" }],
      extensions: ["vue", "ts", "js"],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: "src/auto-imports.d.ts",
      vueTemplate: true,
      // global imports to register
      imports: ["vue", "vue-router"],
      // Auto import for module exports under directories
      dirs: [],
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      // filters for transforming targets
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts",
    }),
  ],
});
