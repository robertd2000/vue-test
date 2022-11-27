<script setup>
import { defineProps } from "vue";
import ImageCard from "../UI/ImageCard.vue";

const props = defineProps(["images"]);
</script>

<template>
  <div class="images">
    <ImageCard v-for="image in images" :key="image" :image="image" />
  </div>
</template>

<style scoped>
.images {
  margin-left: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-auto-rows: 335px; */
  grid-auto-rows: 48%;

  column-gap: 16px;
  row-gap: 16px;
}

.img {
  width: 100%;
  height: 100%;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1135px) {
  .images {
    width: 98%;
  }
}

@media (max-width: 800px) {
  .images {
    margin-left: 0;
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>
