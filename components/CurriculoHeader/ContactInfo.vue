<template>
  <span v-if="value">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" :class="iconClass" :viewBox="viewBox">
      <path :d="path"></path>
    </svg>
    {{ value }}
  </span>
</template>

<script setup>
const props = defineProps({
  value: String,
  iconClass: String,
  viewBox: String,
  path: String
});
</script>

<style scoped>
.icon {
  margin-right: 8px;
  fill: #000;
}
</style>
