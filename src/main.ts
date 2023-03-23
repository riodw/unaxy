import { createApp } from "vue";
// import "./registerServiceWorker";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import routes from "~pages";

// routes.push({
//   path: "/properties/:id",
//   name: "property",
//   component: () => import("./pages/properties/[id].vue"),
// });

// Day JS
// import dayjs from "dayjs";
// Apex Charts
// import VueApexCharts from "vue3-apexcharts";

// Bootstrap
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// Font
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import "@/_variables.scss";

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

// app.provide("dayJS", dayjs);

app.use(pinia);
app.use(router);
// app.use(VueApexCharts);

app.mount("#app");
