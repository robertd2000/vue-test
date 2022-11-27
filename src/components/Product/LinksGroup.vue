<script setup>
import HelpLink from "../UI/HelpLink.vue";
import closes from "../../assets/images/Closes.svg";
import clock from "../../assets/images/clock.svg";
import pay from "../../assets/images/pay.svg";
</script>

<template>
  <div class="group">
    <span>
      <img :src="closes" alt="" />
      <HelpLink>Описание товара</HelpLink>
    </span>

    <span>
      <img :src="clock" alt="" />
      <HelpLink>Доставка и возврат</HelpLink>
    </span>

    <span>
      <img :src="pay" alt="" />
      <HelpLink>Способы оплаты</HelpLink>
    </span>
  </div>
</template>

<style>
.group {
  margin-top: 24px;
}

.group span {
  display: flex;
}

.group img {
  margin-top: 12px;
  margin-right: 4px;
}
</style>
