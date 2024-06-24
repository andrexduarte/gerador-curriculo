<template>
  <fieldset>
    <legend class="form-title">
      Cursos
    </legend>

    <button class="bt-add" @click="addCourse" type="button">
      Adicionar Curso
    </button>

    <div class="reverse-order">
      <div v-for="(course, index) in form.courses" :key="index" class="exp-curso">
        <div @click="toggleSection(index)" :class="['exp-header', {'open': expandedSections.includes(index)}]">
          <h4 class="title-exp">{{ course.curso ? course.curso : 'Preencher Campos' }}</h4>
          <button class="bt-remove" @click.stop="removeCourse(index)" type="button">Remover Curso</button>
        </div>
        <div :class="['exp-content', {'open': expandedSections.includes(index)}]">
          <div class="content-inner">
            <FormKit type="text" label="Curso" v-model="course.curso" />
            <FormKit type="text" label="Instituição" v-model="course.instituicao" />
            <FormKit type="month" label="Data Início" v-model="course.dataInicio" />
            <FormKit type="month" label="Data Término" v-model="course.dataTermino" />
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
import { ref } from 'vue';
import { useFormStore } from '~/stores/form'; // Importa o store form.js

const { form } = useFormStore(); // Obtém a referência para o estado form do store

const expandedSections = ref([]);

function addCourse() {
  form.courses.push({
    curso: '',
    instituicao: '',
    dataInicio: '',
    dataTermino: ''
  });
  expandedSections.value.push(form.courses.length - 1); // Expande o novo item
}

function removeCourse(index) {
  form.courses.splice(index, 1);
  // Remove a seção expandida correspondente se ela existir
  expandedSections.value = expandedSections.value.filter(item => item !== index);
  // Ajusta os índices das seções expandidas
  expandedSections.value = expandedSections.value.map(item => item > index ? item - 1 : item);
}

function toggleSection(index) {
  if (expandedSections.value.includes(index)) {
    expandedSections.value = expandedSections.value.filter(item => item !== index);
  } else {
    expandedSections.value.push(index);
  }
}
</script>

<style scoped>
/* Estilos específicos para o componente Cursos.vue */
</style>
