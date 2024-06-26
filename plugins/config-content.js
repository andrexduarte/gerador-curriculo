export default defineNuxtPlugin( () => {
    return {
        provide: {
          title: "Gerador de Currículo Profissional",
          author: 'André Duarte',
          local: 'Ipatinga',
          siteDesc: 'Front-end developer VueJs | NuxtJs | WordPress | Angular | CSS ',
          tel: '+55 (31) 99293-0696',
          urlTel: '5531992930696',
          authorUrl: 'https://andrexduarte.github.io/adx/',
          email: 'andrexduarte@gmail.com',
          urlInstagram: 'https://www.instagram.com/andrexduarte/',
          urlLinkedin: 'https://www.linkedin.com/in/andreamaralduarte/',
        }
      }
})
