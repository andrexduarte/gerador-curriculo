<template>
  <fieldset>
    <legend class="form-title">
      Referências
    </legend>

    <button class="bt-add" @click="addReferencia" type="button">
      Adicionar Referência
    </button>

    <div class="reverse-order">
      <div v-for="(referencia, index) in form.referencias" :key="index" class="referencia">
        <div @click="toggleSection(index)" :class="['exp-header', {'open': expandedSections.includes(index)}]">
          <h4 class="title-exp">{{ referencia.nome ? referencia.nome : 'Preencher Campos' }}</h4>
          <button class="bt-remove" @click.stop="removeReferencia(index)" type="button">Remover Referência</button>
        </div>
        <div :class="['exp-content', {'open': expandedSections.includes(index)}]">
          <div class="content-inner">
            <FormKit type="text" label="Nome da Referência" v-model="referencia.nome" />
            <FormKit type="text" label="Empresa" v-model="referencia.empresa" />
            <FormKit type="email" label="E-mail" v-model="referencia.email" />
            <FormKit type="tel" label="Telefone" v-model="referencia.telefone" placeholder="(XX) XXXXX-XXXX" v-mask="'(##) #####-####'" />
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

function addReferencia() {
  form.referencias.push({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
  });
  expandedSections.value.push(form.referencias.length - 1); // Expande o novo item
}

function removeReferencia(index) {
  form.referencias.splice(index, 1);
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
/* Estilos específicos para o componente Referencias.vue */
</style>
