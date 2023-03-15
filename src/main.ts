// https:github.com/vuetifyjs/vuetify/tree/master/packages/docs/src
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import routes from "~pages";

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// Composables
import { createVuetify } from "vuetify";
import { md1 } from "vuetify/blueprints";
import { md2 } from "vuetify/blueprints";
import { md3 } from "vuetify/blueprints";

// Plugins
import { registerPlugins } from "@/plugins";

const vuetify = createVuetify({
  blueprint: md1,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#000",
          secondary: "#5CBBF6",
        },
      },
    },
  },
});

// store
const pinia = createPinia();
// router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});

const app = createApp(App);

registerPlugins(app);

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount("#app");
