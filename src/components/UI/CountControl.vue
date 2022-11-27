<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps(["count"]);
const emit = defineEmits(["change-count"]);

const onChangeCount = (value) => {
  emit("change-count", value);
};
</script>

<template>
  <div class="count-control">
    <span @click="onChangeCount(1)">+</span>
    <span>{{ count }}</span>
    <span @click="onChangeCount(-1)">-</span>
  </div>
</template>

<style scoped>
.count-control {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background: #f2f2f2;
  width: 140px;
  font-size: 14px;
  line-height: 65px;
  letter-spacing: 0.04em;
  margin-right: 12px;
}

.count-control:hover {
  background-color: rgb(194, 190, 190);
}

.count-control span {
  cursor: pointer;
}
</style>
