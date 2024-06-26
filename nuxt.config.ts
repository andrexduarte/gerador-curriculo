export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL: '/gerador-de-curriculo-profissional/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  ssr: false,

  modules: ['@formkit/nuxt'],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  plugins: [
    { src: '~/plugins/vue-the-mask.js' },
    { src: '~/plugins/config-content.js' }
  ],
  css: [
    // SCSS file in the project
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],
})