<template>
    <div class="exp-profissional">
      <div class="nomarginbottom">
        <h4>{{ experience.expCargo }}</h4>
        <p class="exp-empresa">{{ experience.expEmpregador }}</p>
        <p class="exp-periodo">
          {{ formatDate(experience.expInicio) }} <template v-if="experience.expInicio"> - </template>
          <template v-if="experience.expAtual">Atual</template>
          <template v-else>{{ formatDate(experience.expTermino) }}</template>
          <template v-if="experience.expTermino"> · </template> {{ calculateDuration(experience.expInicio, experience.expTermino) }}
        </p>
        <p class="exp-cidade">{{ experience.expCidade }}</p>
      </div>
      <p>{{ experience.expDescricao }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      experience: {
        type: Object,
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
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>
  