<script setup>
import { ref } from "vue";
import Left from "./Left.vue";
import RightImageList from "./RightImageList.vue";

const products = ref([
  {
    img: "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/12296786-1%201.png?raw=true",
    likes: 100,
    url: "#",
  },
  {
    img: "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/13986707-1%201.png?raw=true",
    likes: 150,
    url: "#",
  },
  {
    img: "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/13986707-1%201%20(1).png?raw=true",
    likes: 100,
    url: "#",
  },
  {
    img: "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/14896421-1%201.png?raw=true",
    likes: 200,
    url: "#",
  },
  {
    img: "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/12296786-1%201.png?raw=true",
    likes: 200,
    url: "#",
  },
]);
</script>

<template>
  <section class="main">
    <div class="container">
      <Left :image="products[0]" />
      <RightImageList :images="products.slice(1)" />
    </div>
  </section>
</template>

<style>
  .main {
    overflow: hidden;
    margin-top: 30px;
  }

  .img {
    display: block;
    position: relative;
  }

  .img-large {
    width: 100%;
    height: 100%;
  }

  .mask:hover {
    opacity: 1;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
  }

</style>
