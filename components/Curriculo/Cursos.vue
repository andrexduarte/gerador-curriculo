<template>
  <div v-if="courses && courses.length > 0">
    <h3>Cursos</h3>
    <div v-for="(course, index) in courses" :key="index" class="exp-curso">
      <h4>{{ course.curso }}</h4>
      <p class="exp-empresa">{{ course.instituicao }}</p>
      <p class="exp-periodo">
        {{ formatDate(course.dataInicio) }} 
        <template v-if="course.dataInicio"> - </template>
        <template v-if="course.dataTermino">{{ formatDate(course.dataTermino) }}</template>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  courses: {
    type: Array,
    required: true
  }
});

const months = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez'
];

const formatDate = (dateString) => {
  if (!dateString) return '';
  const [year, month] = dateString.split('-');
  return `${months[parseInt(month) - 1]} de ${year}`;
};
</script>

<style scoped>
/* Estilos específicos para o componente Courses.vue */
</style>
