import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useCurriculumStore = defineStore('curriculum', {
  state: () => ({
    currentTemplate: 'template1' // default template
  }),
  actions: {
    switchTemplate(template) {
      this.currentTemplate = template
      Cookies.set('curriculumTemplate', template, { expires: 365 }) // store the choice in a cookie for 1 year
    },
    initializeTemplate() {
      const savedTemplate = Cookies.get('curriculumTemplate')
      if (savedTemplate) {
        this.currentTemplate = savedTemplate
      }
    }
  }
})
