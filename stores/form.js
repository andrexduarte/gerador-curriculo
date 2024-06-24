import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'

export const useFormStore = defineStore('form', () => {
  const form = reactive(loadForm())

  function loadForm() {
    if (process.client) {
      const storedForm = localStorage.getItem('form')
      if (storedForm) {
        return JSON.parse(storedForm)
      } else {
        return getDefaultForm()
      }
    } else {
      return getDefaultForm()
    }
  }

  function saveForm() {
    if (process.client) {
      localStorage.setItem('form', JSON.stringify(form))
    }
  }

  function getDefaultForm() {
    if (process.client) {
      const fields = document.querySelectorAll('[data-field]')
      const defaultForm = {}
      fields.forEach(field => {
        defaultForm[field.dataset.field] = ''
      })
      return defaultForm
    } else {
      return {}
    }
  }

  // Watch for changes in the form and save to localStorage
  watch(form, saveForm, { deep: true })

  return { form }
})
