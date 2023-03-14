import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import routes from "~pages";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

// routes.push({
//   path: "/properties/:id",
//   name: "property",
//   component: () => import("./pages/properties/[id].vue"),
// });

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

app.use(router);
app.use(vuetify);

app.mount("#app");
