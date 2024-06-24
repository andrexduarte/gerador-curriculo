<template>
    <div class="exp-academica">
      <div class="nomarginbottom">
        <h4>
          {{ education.curso }}
        </h4>
        <div class="nomarginbottom">
          <p>
            {{ education.instituicao }}
          </p>
          <p>{{ education.cidade }}</p>
          <p>
            {{ formatDate(education.dataInicio) }}
            <span v-if="education.dataInicio"> - </span>
            {{ formatDate(education.dataTermino) }}
          </p>
        </div>
      </div>
      <p>{{ education.descricao }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      education: {
        type: Object,
        required: true,
      },
      formatDate: {
        type: Function,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>
  