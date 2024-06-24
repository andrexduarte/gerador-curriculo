<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>

    <div>
        <main class="main">
            <section class="form-content">
                <TheHeader />
                <Formulario />
            </section>
            <section class="curriculo-content">
                <transition name="flip">
                    <component :is="currentTemplateComponent" :key="currentTemplateComponent" />
                </transition>
            </section>

            <div class="switch-template">
                <button class="bt-model0" type="button" @click="switchTemplate('template1')">Modelo 1</button>
                <button class="bt-model1" @click="switchTemplate('template2')">Modelo 2</button>
            </div>
        </main>
        <TheFooter />
    </div>
</template>

<script setup>
const title = ref('Gerador de Currículo Profissional')

import { onBeforeMount, computed } from 'vue'
import { useCurriculumStore } from '~/stores/curriculum.js'
import CurriculumTemplate1 from '~/components/Curriculo.vue'
import CurriculumTemplate2 from '~/components/Curriculo1.vue'

const curriculumStore = useCurriculumStore()

const currentTemplateComponent = computed(() => {
  return curriculumStore.currentTemplate === 'template1' 
    ? CurriculumTemplate1 
    : CurriculumTemplate2
})

const switchTemplate = (template) => {
  curriculumStore.switchTemplate(template)
}

onBeforeMount(() => {
  curriculumStore.initializeTemplate()
})
</script>

<script>
export default {
  middleware: 'initTemplate'
}
</script>

<style lang="scss" scoped>
.switch-template {
    position: absolute;
    top: 20px;
    z-index: 10;
    right: 20px;

    button {
        cursor: pointer;
    }
}

.bt-model0,
.bt-model1 {
    border: 1px solid hsl(0, 0%, 0%, .4);
    border-radius: 10px;
    width: 38px;
    height: 38px;
    position: relative;
    font-size: 6px;
    overflow: hidden;
    padding: 0;
    margin: 0 5px;
    
    &::before {
        background-color: hsla(9, 35%, 47%, 0.4);
        content: "";
        height: 30%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
    }
}

.bt-model1 {

    &::before {
        background-color: hsla(9, 35%, 47%, 0.4);
        content: "";
        height: 100%;
        width: 30%;
        top: 0;
        left: 0;
        position: absolute;
    }
}

/* Classes de transição de flip */
.flip-enter-active,
.flip-leave-active {
  transition: transform 0.5s ease-out;
}

.flip-enter-from,
.flip-leave-to {
  transform: rotateY(-180deg);
}

.flip-enter-to,
.flip-leave-from {
  transform: rotateY(0deg);
}
</style>