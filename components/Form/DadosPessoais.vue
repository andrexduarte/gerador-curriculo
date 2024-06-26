<template>
  <fieldset>
    <legend class="form-title">Dados pessoais</legend>

    <div class="input-group">
      <FormKit type="text" label="Nome" v-model="form.nome" required />
      <FormKit type="text" label="Cargo desejado" v-model="form.cargo" required />
      <FormKit type="url" label="Seu link" v-model="form.url" />
    </div>
    <div class="input-group">
      <FormKit type="email" label="E-mail" v-model="form.email" />
      <FormKit
        type="tel"
        label="Telefone"
        v-model="form.telefone"
        placeholder="(XX) XXXXX-XXXX"
        v-mask="'(##) #####-####'"
      />
    </div>
    <FormKit type="text" label="Endereço" v-model="form.endereco" />
    <div class="input-group">
      <FormKit type="text" label="Cidade" v-model="form.cidade" />
      <FormKit
        type="select"
        label="Estado"
        name="estado"
        :options="estados"
        placeholder="Selecione seu estado"
        v-model="form.estado"
      />
    </div>
    <div class="input-group3">
      <FormKit
        type="date"
        value="yyyy-MM-dd"
        label="Data Nascimento"
        v-model="form.datanascimento"
        placeholder="dd/mm/aaaa"
      />
      <FormKit type="text" label="Carteira de motorista" v-model="form.carteira" />
    </div>
  </fieldset>
</template>

<script setup>
import { useFormStore } from '~/stores/form';
import { estados } from '~/stores/estados';

const { form } = useFormStore();
</script>

<style scoped>
/* Estilos específicos para o componente DadosPessoais.vue */
</style>
