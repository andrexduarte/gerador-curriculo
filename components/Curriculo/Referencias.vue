<template>
    <div v-if="referencias && referencias.length > 0">
      <h3>
        Referência{{ referencias.length !== 1 ? 's' : '' }}
      </h3>
      <div v-for="(referencia, index) in referencias" :key="index" class="referencia">
        <p>
          {{ referencia.nome }} 
          <template v-if="referencia.empresa">de</template>
          {{ referencia.empresa }}
        </p>
        <p>
          {{ referencia.email }} 
          <template v-if="referencia.empresa">|</template> 
          {{ referencia.telefone }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    referencias: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .referencia {
    margin-bottom: 1em;
  }
  </style>
  