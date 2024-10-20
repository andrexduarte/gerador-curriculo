import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import ColorPicker from 'primevue/colorpicker'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)
  nuxtApp.vueApp.component('ColorPicker', ColorPicker)
})
