<script setup>
import Navigation from './components/Navigation.vue'
import photo_1 from './assets/images/14896420-2 1 (1).png'
</script>

<template>
  <Navigation />

  <main>
    <section class="main">
      <div class="container">
        <div class="slider">
          <div class="main-image">
            <img :src="photo_1" alt="" />
          </div>
        </div>

        <div class="order">
          <h3 class="title">Пижама для девочек</h3>

          <span class="article"> Арт. 02765/46 </span>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.main {
  margin-top: 24px;
}

.container {
  max-width: 1390px;
  margin: 0 auto;
  display: flex;
}

.order {
  margin-left: 30px;
}

.order.title {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}

.article {
  font-size: 12px;
  line-height: 16px;
  color: #828282;
}
</style>
