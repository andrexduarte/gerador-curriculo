import Cookies from 'js-cookie'
import { useCurriculumStore } from '~/stores/curriculum'

export default defineNuxtRouteMiddleware((to, from) => {
  const curriculumStore = useCurriculumStore()
  const savedTemplate = Cookies.get('curriculumTemplate')
  if (savedTemplate) {
    curriculumStore.currentTemplate = savedTemplate
  }
})
