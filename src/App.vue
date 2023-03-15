<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(null);
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Unaxy</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      here
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
:root {
  --v-border-opacity: 0;
}
</style>
