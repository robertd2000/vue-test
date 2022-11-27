<script setup>
import { defineProps } from "vue";
const props = defineProps(["text"]);
</script>

<template>
  <div class="status">
    {{ text }}
  </div>
</template>

<style scoped>
.status {
  margin-right: 10px;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  letter-spacing: 0.04em;
  color: #333333;
  transition: all 0.3s linear;
  border: 1px solid black;
}

.status:hover {
  background-color: #333333;
  color: #fff;
}
</style>
