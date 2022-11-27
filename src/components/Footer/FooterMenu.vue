<script setup>
import { defineProps } from "vue";

const props = defineProps(["title", "items"]);
</script>

<template>
  <div class="footer-menu">
    <h2 class="title">{{ title }}</h2>

    <ul>
      <li v-for="item in items">
        <a :href="item.url"> {{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer-menu {
  margin-left: 140px;
}

.title {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #333333;
}

.footer-menu ul {
  margin-top: 16px;
  text-align: left;
  padding-left: 0;
}

.footer-menu ul li {
  list-style-type: none;
  margin-top: 8px;
  margin-left: 0;
  padding-left: 0;
}

.footer-menu ul li a {
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
}

@media (max-width: 800px) {
  .footer-menu {
    margin: 0 20px;
  }
}
</style>
