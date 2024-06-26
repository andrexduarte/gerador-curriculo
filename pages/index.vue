<template>
    <Head>
      <Title>{{ $title }}</Title>
      <Meta name="description" :content="$title" />
    </Head>

    <div>
        <main class="main">
            <section class="form-content">
                <TheHeader />
                <Formulario />
            </section>
            <section class="curriculo-content">
                <component :is="currentTemplateComponent" :key="currentTemplateComponent" />
            </section>

            <SwitchTemplate @switch="switchTemplate" />
        </main>
        <TheFooter />
    </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue'
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