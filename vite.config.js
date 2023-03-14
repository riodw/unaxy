import { fileURLToPath, URL } from "url";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
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
    vue({
      include: [/\.vue$/],
    }),

    vuetify(),

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
});
