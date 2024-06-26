<template>
  <div class="curriculo" v-if="formStore">
    <article class="curriculo-wrap" id="curriculoContent">
      <!-- Dados Pessoais -->
      <CurriculoHeader />
      
      <div class="curriculo-main">
        
        <div class="state-zero" v-if="!formStore.form.resumo">
          <CurriculoInstrucoes />
        </div>


        <section class="title-perfil" v-show="formStore.form.resumo">
          <h3>
            Perfil
            <span v-if="formStore.form.datanascimento" class="idade">
              <span :title="formStore.form.datanascimento">
                {{ calcularIdade(formStore.form.datanascimento) }} anos
              </span>
            </span>
          </h3>

          <p>
            {{ formStore.form.resumo }}
          </p>
        </section>

        <section v-show="formStore.form.carteira">
          <h4>
            Carteira de motorista: {{ formStore.form.carteira }}
          </h4>
        </section>
          
        <section>
          <!-- Experiências Profissionais -->
          <ProfessionalExperience
            :experiences="formStore.form.experiences"
            :formatDate="formatDate"
            :calculateDuration="calculateDuration"
          />
        </section>

        <section>
          <!-- Formações Acadêmicas -->
          <EducationalBackground
            :educations="formStore.form.educations"
            :formatDate="formatDate"
          />
        </section>

        <section>
          <!-- Cursos -->
          <CurriculoCursos />
        </section>


        <!-- Idiomas -->
        <section>
          <CurriculoIdiomas :idiomas="formStore.form.idiomas" />
        </section>

        <!-- Cursos -->
        <section>
          <CurriculoCursos :courses="formStore.form.courses" />
        </section>

        <!-- Referências -->
        <section>
          <CurriculoReferencias :referencias="formStore.form.referencias" />
        </section>

        <!-- Portfolio -->
        <section>
          <CurriculoPortfolio :portfolio="formStore.form.portfolio" />
        </section>

      </div>
    </article>
  </div>

  <PrintButton />

</template>

<script setup>
import { useFormStore } from '~/stores/form'
import { ref, onMounted, watch } from 'vue';

let formStore

if (import.meta.env.SSR) {
  formStore = useFormStore();
}

const months = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez'
];

const formatDate = (dateString) => {
  if (!dateString) return '';
  const [year, month] = dateString.split('-');
  return `${months[parseInt(month) - 1]} de ${year}`;
};

const calculateDuration = (start, end) => {
  if (!start || !end) return '';
  
  const startDate = new Date(start);
  const endDate = new Date(end);
  
  let yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  let monthsDiff = endDate.getMonth() - startDate.getMonth();
  
  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff += 12;
  }

  // Determina o singular ou plural para mês(es)
  const monthLabel = monthsDiff === 1 ? 'mês' : 'meses';

  // Monta a string de duração
  if (yearsDiff === 0) {
    return `${monthsDiff} ${monthLabel}`;
  } else {
    const yearLabel = yearsDiff === 1 ? 'ano' : 'anos';
    return `${yearsDiff} ${yearLabel} e ${monthsDiff} ${monthLabel}`;
  }
};

// Função para calcular a idade
const calcularIdade = (dataNascimento) => {
  if (!dataNascimento) return ''

  const hoje = new Date()
  const dataNasc = new Date(dataNascimento)
  let idade = hoje.getFullYear() - dataNasc.getFullYear()

  // Verifica se já fez aniversário neste ano
  if (hoje.getMonth() < dataNasc.getMonth() || 
     (hoje.getMonth() === dataNasc.getMonth() && hoje.getDate() < dataNasc.getDate())) {
    idade--
  }

  return idade
}

const props = defineProps({
  experience: {
    type: Object,
    required: true
  }
});

</script>
