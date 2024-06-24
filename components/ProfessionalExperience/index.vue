<template>
    <div v-if="hasExperiences">
      <h3>Experiências Profissionais</h3>
      <div class="reverse-order">
        <ExperienceItem
          v-for="(experience, index) in experiences"
          :key="index"
          :experience="experience"
          :formatDate="formatDate"
          :calculateDuration="calculateDuration"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ExperienceItem from './ExperienceItem.vue';
  
  export default {
    components: {
      ExperienceItem,
    },
    props: {
      experiences: {
        type: Array,
        required: true,
      },
      formatDate: {
        type: Function,
        required: true,
      },
      calculateDuration: {
        type: Function,
        required: true,
      },
    },
    computed: {
      hasExperiences() {
        return this.experiences && this.experiences.length > 0;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>
  