<script setup>
import { defineProps } from "vue";

const props = defineProps(["message"]);
console.log(props);
</script>

<template>
  <div class="popup">
    <h3>{{ message }}</h3>
  </div>
</template>

<style scoped>
.popup {
  position: absolute;
  top: 43%;
  left: 65%;
  padding: 10px 15px;
  width: 300px;
  background-color: #f4902c;
  color: white;
}

@media (max-width: 1135px) {
  .popup {
    left: 15%;

  }
}
</style>
