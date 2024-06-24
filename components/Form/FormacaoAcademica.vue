<template>
  <fieldset>
    <legend class="form-title">
      Formação Acadêmica
    </legend>

    <button class="bt-add" @click="addEducation" type="button">
      Adicionar Formação
    </button>

    <div class="reverse-order">
      <div v-for="(education, index) in form.educations" :key="index" class="exp-academica">
        <div @click="toggleSection(index)" :class="['exp-header', {'open': expandedSections.includes(index)}]">
          <h4 class="title-exp">{{ education.instituicao ? education.instituicao : 'Preencher Campos' }}</h4>
          <button class="bt-remove" @click.stop="removeEducation(index)" type="button">Remover</button>
        </div>
        <div :class="['exp-content', {'open': expandedSections.includes(index)}]">
          <div class="content-inner">
            <FormKit type="text" label="Curso" v-model="education.curso" />
            <FormKit type="text" label="Instituição" v-model="education.instituicao" />
            <FormKit type="text" label="Cidade" v-model="education.cidade" />
            <FormKit type="month" label="Data Início" v-model="education.dataInicio" />
            <FormKit type="month" label="Data Término" v-model="education.dataTermino" />
            <FormKit type="textarea" label="Descrição" placeholder="Descreva suas principais atividades e conquistas durante este curso." v-model="education.descricao" />
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

function addEducation() {
  form.educations.push({
    curso: '',
    instituicao: '',
    cidade: '',
    dataInicio: '',
    dataTermino: '',
    descricao: ''
  });
  expandedSections.value.push(form.educations.length - 1); // Expande o novo item
}

function removeEducation(index) {
  form.educations.splice(index, 1);
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
/* Estilos específicos para o componente FormacaoAcademica.vue */
</style>
