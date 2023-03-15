<script setup lang="ts">
// import { ref } from "vue";

// defineProps({
//   msg: String,
// });
</script>

<template>
  <v-container>
    <v-card
      border
      flat
    >
      <v-card-title>Colored Card Border</v-card-title>
      <v-card-text>
        Colored text, you may change alert color into any you'd like.
      </v-card-text>
      <v-card-actions>
        <v-btn variant="outlined">Click me</v-btn>
      </v-card-actions>
    </v-card>

    <v-btn variant="outlined">Button</v-btn>
    <v-row>
      <template
        v-for="n in 4"
        :key="n"
      >
        <v-col
          class="mt-2"
          cols="12"
        >
          <strong>Category {{ n }}</strong>
        </v-col>
        <v-col
          v-for="j in 6"
          :key="`${n}${j}`"
          cols="6"
          md="2"
        >
          <v-sheet height="150"></v-sheet>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<style scoped></style>
