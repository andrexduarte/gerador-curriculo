<template>
  <fieldset>
    <legend class="form-title">
      Experiência Profissional
    </legend>

    <button class="bt-add" @click="addExperience" type="button">
      Adicionar Experiência
    </button>

    <div class="reverse-order">
      <div v-for="(experience, index) in form.experiences" :key="index" class="exp-profissional">
        <div @click="toggleSection(index)" :class="['exp-header', {'open': expandedSections.includes(index)}]">
          <h4 class="title-exp">{{ experience.expEmpregador ? experience.expEmpregador : 'Preencher Campos' }}</h4>
          <button class="bt-remove" @click.stop="removeExperience(index)" type="button">
            Remover
          </button>
        </div>
        <div :class="['exp-content', {'open': expandedSections.includes(index)}]">
          <div class="content-inner">
            <FormKit
              type="text"
              label="Cargo"
              v-model="experience.expCargo"
            />
            <div class="input-group">
              <FormKit
                type="text"
                label="Empregador"
                v-model="experience.expEmpregador"
              />
              <FormKit
                type="text"
                label="Cidade"
                v-model="experience.expCidade"
              />
            </div>
            <div class="input-group">
              <FormKit
                type="date"
                label="Data Início"
                v-model="experience.expInicio"
              />
              <FormKit
                type="date"
                label="Data Término"
                v-model="experience.expTermino"
              />
              <FormKit
                type="checkbox"
                label="Essa é sua ocupação atual?"
                v-model="experience.expAtual"
              />
            </div>
            <FormKit
              type="textarea"
              label="Descrição"
              placeholder="Escreva de forma objetiva um resumo sobre sua vida profissional."
              v-model="experience.expDescricao"
            />
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

function addExperience() {
  form.experiences.push({
    expCargo: '',
    expEmpregador: '',
    expCidade: '',
    expInicio: '',
    expTermino: '',
    expAtual: false,
    expDescricao: ''
  });
  expandedSections.value.push(form.experiences.length - 1); // Expande o novo item
}

function removeExperience(index) {
  form.experiences.splice(index, 1);
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
/* Estilos específicos para o componente ExperienciaProfissional.vue */
</style>
