<script setup></script>

<template>
  <p>
    <a href="#">
      <slot></slot>
    </a>
  </p>
</template>

<style scoped>
p {
  margin-top: 12px;
}
a {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: #333333;
}
</style>
