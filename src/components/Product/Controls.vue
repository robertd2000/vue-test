<script setup>
import { ref, defineEmits } from "vue";
import CountControl from "../UI/CountControl.vue";
import Button from "../UI/Button.vue";
import HelpLink from "../UI/HelpLink.vue";
import heart from "../../assets/svg/heart.svg";

const count = ref(1);

const emit = defineEmits(["addToCart"]);

const changeCount = (value) => {
  if (count.value === 1 && value === -1) count.value += 0;
  else count.value += value;
};

const onAddToCart = () => {
  emit("addToCart", count.value);
  count.value = 1;
};
</script>

<template>
  <div class="controls">
    <CountControl :count="count" @change-count="changeCount" />
    <div class="buttons">
      <Button @click="onAddToCart">Добавить в корзину</Button>
      <Button :small="true"> <img :src="heart" alt="" /> </Button>
    </div>
    
  </div>
  <HelpLink> Купить в 1 клик </HelpLink>
</template>

<style scoped>
.controls {
  display: flex;
  margin-top: 40px;
}

.buttons {
  display: flex;

}

.buttons img {
  margin-top: 10px;
}

@media (max-width: 800px) {
  .controls {
    display: block;
    margin-top: 40px;
  }

  .buttons {
    margin-top: 20px;
  }
}
</style>
