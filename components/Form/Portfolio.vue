<template>
  <fieldset>
    <legend class="form-title">
      Portfolio
    </legend>

    <button class="bt-add" @click="addPortfolio" type="button">
      Adicionar Item de Portfolio
    </button>

    <div class="reverse-order">
      <div v-for="(portfolio, index) in form.portfolio" :key="index" class="portfolio">
        <div @click="toggleSection(index)" :class="['exp-header', {'open': expandedSections.includes(index)}]">
          <h4 class="title-exp">{{ portfolio.projeto ? portfolio.projeto : 'Preencher Campos' }}</h4>
          <button class="bt-remove" @click.stop="removePortfolio(index)" type="button">Remover Item de Portfolio</button>
        </div>
        <div :class="['exp-content', {'open': expandedSections.includes(index)}]">
          <div class="content-inner">
            <FormKit type="text" label="Projeto" v-model="portfolio.projeto" />
            <FormKit type="text" label="Descrição" v-model="portfolio.descricao" />
            <FormKit type="url" label="Link do Projeto" v-model="portfolio.link" :value="portfolio.link || 'http://'" />
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

function addPortfolio() {
  form.portfolio.push({
    projeto: '',
    descricao: '',
    link: 'http://',
  });
  expandedSections.value.push(form.portfolio.length - 1); // Expande o novo item
}

function removePortfolio(index) {
  form.portfolio.splice(index, 1);
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
/* Estilos específicos para o componente Portfolio.vue */
</style>
