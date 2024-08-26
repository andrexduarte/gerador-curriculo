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
  modules: ['@formkit/nuxt', 'nuxt-gtag'],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },

  gtag: {
    id: 'G-YXCNRDCXDT'
  },

  plugins: [
    { src: '~/plugins/vue-the-mask.js' },
    { src: '~/plugins/config-content.js' }
  ],

  css: [
    // SCSS file in the project
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],

  compatibilityDate: '2024-08-26',
})