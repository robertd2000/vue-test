<script setup>
import { defineProps } from "vue";
import ImageCard from "../UI/ImageCard.vue";

const props = defineProps(["image"]);
</script>

<template>
  <ImageCard class="img-large" :image="image" />
</template>

<style scoped>
.img-large {
  /* width: 686px;
  height: 688px; */
  width: 100%;
  height: 100%;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
