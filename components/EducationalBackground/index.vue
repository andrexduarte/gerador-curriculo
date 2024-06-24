<template>
    <div v-if="hasEducations">
      <h3>Formações Acadêmicas</h3>
      <div v-for="(education, index) in educations" :key="index" class="exp-academica">
        <EducationalItem
          :education="education"
          :formatDate="formatDate"
        />
      </div>
    </div>
  </template>
  
  <script>
  import EducationalItem from './EducationalItem.vue';
  
  export default {
    components: {
      EducationalItem,
    },
    props: {
      educations: {
        type: Array,
        required: true,
      },
      formatDate: {
        type: Function,
        required: true,
      },
    },
    computed: {
      hasEducations() {
        return this.educations && this.educations.length > 0;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>
  