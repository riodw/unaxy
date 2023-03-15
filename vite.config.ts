import path from "path";
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: [{ dir: "src/pages", baseRoute: "" }],
      extensions: ["vue", "ts", "js"],
    }),

    // https://github.com/antfu/unplugin-auto-import#configuration
    AutoImport({
      /* options */
    }),

    // https://github.com/antfu/unplugin-vue-components#configuration
    Components({
      /* options */
    }),
  ],
  define: { "process.env": {} },
  server: {
    port: 3000,
  },
});
