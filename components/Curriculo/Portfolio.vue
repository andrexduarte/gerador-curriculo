<template>
  <div v-if="portfolio && portfolio.length > 0">
    <h3>Portfolio</h3>
    <div v-for="(item, index) in portfolio" :key="index" class="portfolio">
      <h4>{{ item.projeto }}</h4>
      <p class="url">{{ item.link }}</p>
      <p>{{ item.descricao }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  portfolio: {
    type: Array,
    required: true
  }
});
</script>

