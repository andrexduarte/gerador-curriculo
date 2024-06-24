<template>
  <fieldset>
    <legend class="form-title">
      Idiomas
    </legend>

    <button class="bt-add" @click="addIdioma" type="button">
      Adicionar Idioma
    </button>

    <div class="reverse-order">
      <div v-for="(idioma, index) in form.idiomas" :key="index" class="idioma">
        <div @click="toggleSection(index)" :class="['exp-header', {'open': expandedSections.includes(index)}]">
          <h4 class="title-exp">{{ idioma.idioma ? idioma.idioma : 'Preencher Campos' }}</h4>
          <button class="bt-remove" @click.stop="removeIdioma(index)" type="button">Remover Idioma</button>
        </div>
        <div :class="['exp-content', {'open': expandedSections.includes(index)}]">
          <div class="content-inner">
            <FormKit type="text" :label="'Idioma '" v-model="idioma.idioma" />
            <FormKit type="select" :label="'Nível '" v-model="idioma.nivel" :options="['Básico', 'Intermediário', 'Avançado', 'Nativo/Fluente']" />
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

function addIdioma() {
  form.idiomas.push({
    idioma: '',
    nivel: '',
  });
  expandedSections.value.push(form.idiomas.length - 1); // Expande o novo item
}

function removeIdioma(index) {
  form.idiomas.splice(index, 1);
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
/* Estilos específicos para o componente Idiomas.vue */
</style>
