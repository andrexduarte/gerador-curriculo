<template>
  <fieldset>
    <legend class="form-title">Resumo Profissional</legend>
    <FormKit
      type="textarea"
      placeholder="Escreva de forma objetiva um resumo sobre sua vida profissional."
      v-model="form.resumo"
    />
  </fieldset>
</template>

<script setup>
import { useFormStore } from '~/stores/form';

const { form } = useFormStore();
</script>

<style scoped>
/* Estilos específicos para o componente ResumoProfissional.vue */
</style>
