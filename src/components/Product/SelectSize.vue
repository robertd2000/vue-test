<script setup>
import { defineProps } from "vue";
import HelpLink from "../UI/HelpLink.vue";

const props = defineProps(["sizes"]);
</script>

<template>
  <div class="size-input">
    <select name="select">
      <option value="sizes[0]" selected>Выбрать размер</option>

      <option v-for="size in sizes" :key="size" value="size">
        {{ size }}
      </option>
    </select>

    <HelpLink>Определить размер</HelpLink>
  </div>
</template>

<style scoped>
.size-input {
  margin-top: 35px;
}

.size-input select {
  padding: 12px 16px;
  background-color: white;
  border: 1px solid black;
  width: 315px;
}

@media (max-width: 800px) {
  .size-input select {
    min-width: none;
    width: 70%;
  }
}
</style>
