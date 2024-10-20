import Aura from '@primevue/themes/aura/colorpicker';
import ColorPickerStyle from 'primevue/colorpicker/style';
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    baseURL: '/gerador-curriculo/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  ssr: false,
  modules: ['@formkit/nuxt', 'nuxt-gtag', '@primevue/nuxt-module'],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },

  gtag: {
    id: 'G-YXCNRDCXDT'
  },

  plugins: [
    { src: '~/plugins/vue-the-mask.js' },
    { src: '~/plugins/config-content.js' },
    { src: '~/plugins/primevue.js' }
  ],
  // primevue: {
  //   options: {
  //     unstyled: true
  //   },
  //   components: {
  //     prefix: 'Prime',
  //     include: ['ColorPicker'],    /* Used as <PrimeButton /> and <PrimeDataTable /> */
  //   }
  // },
  css: [
    "~/assets/style/main.scss",
  ],

  compatibilityDate: '2024-08-26',
})