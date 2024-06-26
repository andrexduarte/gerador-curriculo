<template>
  <div class="curriculo model1" v-if="formStore">
    <article class="curriculo-wrap" id="curriculoContent">
      <!-- Dados Pessoais -->
      <header class="curriculo-header">
        <h3>
          Contatos
        </h3>
        <address class="contacts">
          <CurriculoHeaderAddressInfo
            :address="formStore.form.endereco"
            :city="formStore.form.cidade"
            :state="formStore.form.estado"
            iconClass="local-icon"
            viewBox="0 0 384 512"
            path="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
          <CurriculoHeaderContactInfo
            :value="formStore.form.email"
            iconClass="email-icon"
            viewBox="0 0 512 512"
            path="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          />
          <CurriculoHeaderContactInfo
            :value="formStore.form.telefone"
            iconClass="tel-icon"
            viewBox="0 0 512 512"
            path="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          />
        </address>

        <p class="subtitle-url">{{ formStore.form.url }}</p>

        <template v-if="formStore.form.carteira">
          <section class="box">
            <h3>
              Carteira de motorista
            </h3>

            <p>
              {{ formStore.form.carteira }}
            </p>
          </section>
        </template>

        <!-- Idiomas -->
        <section class="box">
          <CurriculoIdiomas :idiomas="formStore.form.idiomas" />
        </section>

        <section class="box">
          <!-- Portfolio -->
          <CurriculoPortfolio :portfolio="formStore.form.portfolio" />
        </section>
      </header>
      
      <div class="curriculo-main">
        <h1>{{ formStore.form.nome ? formStore.form.nome : 'Seu nome' }}

          <span v-if="formStore.form.datanascimento" class="idade">
              <span :title="formStore.form.datanascimento">
                {{ calcularIdade(formStore.form.datanascimento) }} anos
              </span>
            </span>
        </h1>
        <p class="subtitle">{{ formStore.form.cargo ? formStore.form.cargo : 'Cargo Desejado' }}</p>
        <div class="state-zero" v-if="!formStore.form.resumo">
          <CurriculoInstrucoes />
        </div>


        <section class="title-perfil" v-show="formStore.form.resumo">
          <h3>
            Perfil
          </h3>

          <p>
            {{ formStore.form.resumo }}
          </p>
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
        
        <!-- Cursos -->
        <section>
          <CurriculoCursos :courses="formStore.form.courses" />
        </section>

        <!-- Referências -->
        <section>
          <CurriculoReferencias :referencias="formStore.form.referencias" />
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

if (!import.meta.env.SSR) {
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

