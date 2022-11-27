<script setup>
import { useScroll } from "../composables/useScroll";
import profile from "../assets/images/profile.png";
import heart from "../assets/images/heart.png";
import bag from "../assets/images/bag.png";
import { ref } from "vue";

const logo =
  "https://raw.githubusercontent.com/robertd2000/vue-test/ae32f29db0c292de952c92b7af6abf2e21b52361/src/assets/svg/LOGO.svg";

const scroll = useScroll();
const isOpen = ref(false)
const content = ref(null)

const onClose = e => {
  if (!content.value.contains(e.target)) {
    isOpen.value = false
  }
} 
</script>

<template>
  <div id="toggle" class="toggle-wrapper" :class="{open: isOpen}" @click="onClose">
      
  <div class="toggle" @click="onClose">
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
  </div>
  <div ref="content" class="toggle-icons">
      <p>постельное белье</p>
      <p>одежда для дома</p>
      <p>Одежда для улицы</p>
      <p>ВЫход</p>
    </div>
  </div>
  <header>
    <nav class="container">
      <div class="logo">
        <img :src="logo" alt="" />
      </div>

      <div class="icons">
        <img :src="profile" alt="" />
        <img :src="heart" alt="" />
        <img :src="bag" alt="" />
      </div>

      <div class="toggle-menu" @click="isOpen = !isOpen">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  transition: all 0.4s;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  z-index: 990;
}

.scroll-down header {
  transform: translate3d(0, -100%, 0);
}

.scroll-up header {
  transform: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

nav {
  display: flex;
  justify-content: space-between;
}

.icons {
  color: black;
  display: flex;
}

.icons img {
  width: 15px;
  height: 15px;
  margin-left: 30px;
}

.toggle-menu, 
.toggle-wrapper {
  display: none;
}

@media (max-width: 800px) {
  header {
    box-shadow: none;
  }
  nav {
    margin: 0 20px !important;
  }
}

@media (max-width: 375px) {
  .icons {
    margin-left: 40px;
  }

  .toggle-menu {
    display: block;
    z-index: 999;
  }

  .toggle-menu {
    display: block;
    width: 20px;
    height: 20px;
    z-index: 999;
  }

  .line {
    background-color: black;
    height: 1px;
    margin-top: 5px;
  } 

  .line1 {
    margin-top: 3px;
  }

  .toggle-wrapper {
    top: 0;
    height: 100vh;
    width: 100%;
    background: transparent;
    position: fixed;
    z-index: 997;
  }

  .toggle-icons {
    padding-top: 80px;
    padding-left: 30px;
    position: relative;
    height: 280px;
    background-color: #ffffff;
    transition: all 0.5s ease-out;
    z-index: 998;
  }

  .toggle-icons p {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 30px;
  }
    
  .toggle-wrapper.open, .toggle-icons.open {
    display: block;
  }

  .toggle {
    position: absolute;
    width: 20px;
    top: 20px;
    right: 20px;
    z-index: 999;
  }
  .toggle .line2  {
    background-color: transparent;
  }
  .toggle .line1  {
    transform: rotate(45deg) translate(1px, 5px);

  }
  .toggle .line3  {
    transform: rotate(-45deg) translate(4px, -8px);
  }
}
</style>
