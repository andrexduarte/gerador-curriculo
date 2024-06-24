<template>
  
    <h3>Instruções</h3>
    <ol>
      <li>
        <strong>Dados Pessoais:</strong> Comece preenchendo seus dados pessoais, como nome, email, telefone, cidade e endereço.
      </li>
      <li>
        <strong>Objetividade:</strong> Seja objetivo ao descrever suas experiências profissionais, formação acadêmica, cursos, idiomas e referências.
      </li>
      <li>
        <strong>Campos Opcionais:</strong> Não é necessário preencher todos os campos. Deixe em branco aqueles que não se aplicam ou você não deseja incluir.
      </li>
      <li>
        <strong>Formato de Datas:</strong> Utilize o formato DD-MM-AAAA para datas, quando aplicável, como em experiências profissionais, formação acadêmica e cursos.
      </li>
      <li>
        <strong>Idiomas:</strong> Indique seu nível de proficiência em idiomas (básico, intermediário, avançado) ao preencher a seção de idiomas.
      </li>
      <li>
        <strong>Referências:</strong> Forneça detalhes completos ao adicionar referências, incluindo nome, empresa, email e telefone.
      </li>
      <li>
        <strong>Revisão Final:</strong> Revise seu currículo antes de enviar para garantir que todas as informações estejam corretas e atualizadas.
      </li>
      <li>
        <strong>Segurança:</strong> Mantenha suas informações pessoais e profissionais seguras durante o preenchimento do formulário.
      </li>
      <li>
        <strong>Estilo Consistente:</strong> Mantenha um estilo consistente ao preencher o formulário, especialmente ao descrever suas experiências e habilidades.
      </li>
    </ol>
</template>

<script setup>
import { useFormStore } from '~/stores/form';
const { formStore } = useFormStore();
</script>

<style scoped>
/* Estilos específicos para o componente Instrucoes.vue */
.state-zero {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.state-zero h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.state-zero ol {
  padding-left: 20px;
}

.state-zero li {
  margin-bottom: 10px;
}

.state-zero strong {
  font-weight: bold;
  display: block;
}
</style>
