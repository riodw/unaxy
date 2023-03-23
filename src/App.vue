<script setup lang="ts">
// import { User } from "@supabase/supabase-js";
// import { supabase } from "@/supabase";
// import { useAuthStore } from "@/stores/auth";

// const auth = useAuthStore();
// // auth.loadUser();
// // let user = auth.user;

// supabase.auth.onAuthStateChange((event) => {
//   console.log(event);
//   if (event === "SIGNED_IN") {
//     auth.loadUser();
//     // auth.loadRedirectRoute();
//   } else if (event === "SIGNED_OUT") {
//     auth.clearUser();
//   }
//   // user = auth.user;
// });

// // listen for auth events (e.g. sign in, sign out, refresh)
// useOnAuthStateChange((event, session) => {
//   console.log(event);
//   if (event === "SIGNED_OUT") {
//     // store.state.user = null;
//   } else {
//     // store.state.user = session.user;
//   }
// });
</script>

<template>
  <div id="viewport">
    <NavTop />
    <div id="body-wrapper">
      <!-- LEFT-NAV -->
      <NavLeft />
      <div id="page-content-wrapper">
        <div
          id="main-content"
          class="container mx-auto"
          style="margin-top: 69px"
        >
          <RouterView />
        </div>
      </div>
    </div>
    <!-- <footer class="position-sticky">
      <nav class="navbar navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#">Fixed bottom</a>
        </div>
      </nav>
    </footer> -->
  </div>
</template>

<style lang="scss">
html,
body {
  // height: 100vh;
  // height: -webkit-fill-available;
  font-family: "Roboto", sans-serif;
  // background-color: #f3f3f5;
  text-rendering: optimizeLegibility;
}
a,
button {
  text-decoration: none !important;
  cursor: pointer;
}
.btn-toggle[aria-expanded="true"] i {
  transform: rotate(90deg);
}
.btn-toggle i {
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}
#app {
  font-family: "Roboto", system-ui, -apple-system, "Segoe UI", Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // display: flex;
  // flex-direction: column;
  // color: #2c3e50;
  // background-color: #f3f3f5;
}

/* COLORS */
/* 
  Apple Colors
  https://developer.apple.com/design/human-interface-guidelines/foundations/color/
*/
/* Red */
.text-red {
  color: rgb(255, 69, 58) !important;
}
.bg-red {
  background-color: rgb(255, 69, 58) !important;
}
/* Orange */
.text-orange {
  color: rgb(255, 159, 10) !important;
}
.bg-orange {
  background-color: rgb(255, 159, 10) !important;
}
/* Yellow */
.text-yellow {
  color: rgb(255, 214, 10) !important;
}
.bg-yellow {
  background-color: rgb(255, 214, 10) !important;
}
/* Green */
.text-green {
  color: rgb(48, 209, 88) !important;
}
.bg-green {
  background-color: rgb(48, 209, 88) !important;
}
/* Mint */
.text-mint {
  color: rgb(102, 212, 207) !important;
}
.bg-mint {
  background-color: rgb(102, 212, 207) !important;
}
/* Teal */
.text-teal {
  color: rgb(64, 200, 224) !important;
}
.bg-teal {
  background-color: rgb(64, 200, 224) !important;
}
/* Cyan */
.text-cyan {
  color: rgb(100, 210, 255) !important;
}
.bg-cyan {
  background-color: rgb(100, 210, 255) !important;
}
/* Blue */
.text-blue {
  color: rgb(10, 132, 255) !important;
}
.bg-blue {
  background-color: rgb(10, 132, 255) !important;
}
/* Indigo */
.text-indigo {
  color: rgb(94, 92, 230) !important;
}
.bg-indigo {
  background-color: rgb(94, 92, 230) !important;
}
/* Purple */
.text-purple {
  color: rgb(191, 90, 242) !important;
}
.bg-purple {
  background-color: rgb(191, 90, 242) !important;
}
/* Pink */
.text-pink {
  color: rgb(255, 55, 95) !important;
}
.bg-pink {
  background-color: rgb(255, 55, 95) !important;
}
/* Brown */
.text-brown {
  color: rgb(172, 142, 104) !important;
}
.bg-brown {
  background-color: rgb(172, 142, 104) !important;
}
/* Gray */
.text-gray {
  color: rgb(152, 152, 157) !important;
}
.bg-gray {
  background-color: rgb(152, 152, 157) !important;
}

.bg-light-gray {
  background-color: #e9e9e9 !important;
}

/* OVER WRITES */
.card {
  border: none !important;
}
</style>
