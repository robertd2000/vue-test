<script setup>
import { ref, computed } from "vue";
import { validateEmail } from "../../utils/validation";
import cross from '../../assets/images/cross.png'

const email = ref("");

const isEmailValid = computed(() => validateEmail(email.value));
</script>

<template>
  <div class="subscription">
    <h2 class="title">Узнайте первыми о новинках и акциях</h2>
    

    <input
      type="email"
      placeholder="Адрес электронной почты"
      v-model="email"
      :class="{ error: email.length > 0 && !isEmailValid }"
    />

    <img @click="email = ''" :src="cross" alt=""/>
    <button class="btn" :disabled="!isEmailValid">Подписаться</button>
  </div>
</template>

<style scoped>
.subscription {
  width: 50%;
  padding: 0 120px;
}

.title {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #333333;
}

input {
  position: relative;
  width: 452px;
  margin-top: 40px;
  padding: 12px 16px;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #c4c4c4;
}

input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: searchfield-cancel-button;
}
input.error {
  border-color: red;
}

input:focus {
  border-color: blue;
}

input.error:focus {
  border-color: red;
}

.subscription img {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 93%;
  float: right;
  z-index: 999;
}

.btn {
  float: right;
  margin-top: 35px;
  padding: 8px 28px;
  background: #ffffff;
  border: 1px solid #333333;
  transition: all 0.3s linear;
}

.btn:hover {
  background-color: #333333;
  color: #ffffff;
}

@media (max-width: 1135px) {
  input {
    width: 100%;
  }
}

@media (max-width: 800px) {
  .subscription {
    width: 100%;
    margin-top: 55px;
    padding: 0 20px;
  }

  input {
    width: 80%;
  }
}
</style>
