import { defineStore } from "pinia";
// import { RouteLocation } from "vue-router";

// import { User } from "@supabase/supabase-js";
// import { supabase } from "@/supabase";

// /**
//  * https://gh.fakev.cn/maciejpedzich/vue-supabase-tpa-demo/blob/master/src/App.vue
//  * https://gh.fakev.cn/maciejpedzich/vue-supabase-tpa-demo/blob/master/src/views/SignInView.vue
//  * https://gh.fakev.cn/maciejpedzich/vue-supabase-tpa-demo/blob/master/src/views/HomeView.vue
//  * https://gh.fakev.cn/maciejpedzich/vue-supabase-tpa-demo/blob/master/src/views/ProfileView.vue
//  * https://gh.fakev.cn/maciejpedzich/vue-supabase-tpa-demo/blob/master/src/stores/auth.ts
//  *
//  * https://github.com/cornflourblue/vue-3-pinia-jwt-authentication-example/blob/master/src/stores/auth.store.js
//  * https://github.com/DidoMarchet/vue-3-supabase/blob/main/lib/main.ts
//  */

// const auth: any = supabase.auth;

// type State = {
//   user: User | null;
//   returnUrl: Partial<RouteLocation> | null;
// };

// type Getters = {
//   authenticated(): boolean;
// };

// type Actions = {
//   loadUser(): void;
//   clearUser(): void;
//   saveReturnUrl(route: Partial<RouteLocation>): void;
//   loadReturnUrl(): void;
//   clearReturnUrl(): void;
//   signIn(): void;
//   signOut(): void;
// };

// export const useAuthStore = defineStore<"auth", State, Getters, Actions>(
//   "auth",
//   {
//     state() {
//       return {
//         user: null,
//         returnUrl: null,
//       };
//     },
//     getters: {
//       authenticated() {
//         return Boolean(this.user);
//       },
//     },
//     actions: {
//       async loadUser() {
//         const user = (await supabase.auth.getSession()).data.session?.user;
//         console.log(user);
//         this.user = user || null;
//       },
//       clearUser() {
//         this.user = null;
//       },
//       saveReturnUrl(route: Partial<RouteLocation>) {
//         const { name, params, query, hash } = route;
//         localStorage.setItem(
//           "returnUrl",
//           JSON.stringify({
//             name,
//             params,
//             query,
//             hash,
//           }),
//         );
//       },
//       loadReturnUrl() {
//         const route = JSON.parse(
//           localStorage.getItem("returnUrl") || "null",
//         ) as Partial<RouteLocation> | null;

//         this.returnUrl = route;
//       },
//       clearReturnUrl() {
//         localStorage.removeItem("returnUrl");
//         this.returnUrl = null;
//       },
//       async signIn() {
//         const { user, session, error } = await auth.signInWithOAuth({
//           provider: "google",
//         });
//         this.user = user;
//         console.log(user, session, error);
//       },
//       async signOut() {
//         await supabase.auth.signOut();
//         this.user = null;
//         localStorage.removeItem("user");
//         // router.push("/login");
//       },
//     },
//   },
// );
