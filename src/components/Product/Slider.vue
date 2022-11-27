<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["images"]);
const current = ref(props.images[0]);
</script>

<template>
  <div class="slider">
    <div class="main-image">
      <img :src="current" alt="" />
    </div>
    <div class="images">
      <div class="image" v-for="image in images" :key="image">
        <img :src="image" alt="image" @click="current = image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  width: 50%;
}

.main-image {
  max-width: 800px;
  width: 100%;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.images {
  top: 26px;
  left: 24px;
  position: absolute;
  transition: all 0.5 linear;
}

.image:hover {
  opacity: 0.6;
}

.image img {
  max-width: 70px;
  max-height: 91px;
}

@media (max-width: 1135px) {

  
  .main-image {
    max-width: 550px;
    width: 100%;
  }
}

@media (max-width: 800px) {
  .slider {
    width: 100%;
  }
  
  .main-image {
    max-width: 800px;
    width: 100%;
  }

  .image img {
    max-width: 40px;
    max-height: 52px;
  }
}
</style>
