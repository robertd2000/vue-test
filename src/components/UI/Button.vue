<script setup>
import { defineProps } from "vue";
const props = defineProps(["small"]);
</script>

<template>
  <div
    class="btn"
    :class="{
      small: small,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.btn {
  background: #333333;
  border: 1px solid #333333;
  padding: 20px 28px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-right: 4px;
  transition: all 0.3s linear;
}

.btn.small {
  padding: 14px;
}

.btn:hover {
  background-color: #ffffff;
  color: #333333;
}
</style>
