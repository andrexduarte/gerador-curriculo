<template>
  <div v-if="idiomas && idiomas.length > 0">
    <h3>Idiomas</h3>
    <div v-for="(idioma, index) in idiomas" :key="index" class="idioma">
      <p>{{ idioma.idioma }} {{ idioma.nivel }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  idiomas: {
    type: Array,
    required: true
  }
});
</script>

