<template>
  <div class="form" v-if="formStore">
    <form>
      <!-- Dados Pessoais -->
      <FormDadosPessoais />
      
      <!-- Resumo Profissional -->
      <FormResumoProfissional />

      <!-- Experiência Profissional -->
      <FormExperienciaProfissional />

      <!-- Formação Acadêmica -->
      <FormFormacaoAcademica />

      <!-- Cursos -->
      <FormCursos />

      <!-- Idiomas -->
      <FormIdiomas />

      <!-- Referências -->
      <FormReferencias />

      <!-- Portfolio -->
      <FormPortfolio />

      <PrintButton />

    </form>
  </div>
</template>

<script setup>
import { useFormStore } from '~/stores/form'
import { onMounted } from 'vue'


let formStore = useFormStore()

onMounted(() => {
  if (!formStore.form.experiences) {
    formStore.form.experiences = []
  }
  if (!formStore.form.educations) {
    formStore.form.educations = []
  }
  if (!formStore.form.courses) {
    formStore.form.courses = []
  }
  if (!formStore.form.idiomas) {
    formStore.form.idiomas = []
  }
  if (!formStore.form.referencias) {
    formStore.form.referencias = []
  }
  if (!formStore.form.portfolio) {
    formStore.form.portfolio = []
  }
})

</script>