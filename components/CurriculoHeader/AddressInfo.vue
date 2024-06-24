<template>
  <span v-if="address">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" :class="iconClass" :viewBox="viewBox">
      <path :d="path"></path>
    </svg>
    {{ address }} 
    <template v-if="address">-</template> 
    {{ city }}
    <template v-if="state">,</template> 
    {{ state }}
  </span>
</template>

<script setup>
const props = defineProps({
  address: String,
  city: String,
  state: String,
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