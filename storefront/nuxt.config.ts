// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Storefront',
      meta: [
        {name: 'description', content: 'storefront website with nuxt.js and tailwindcss for the frontend and fakestore api as the backend'},
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },

  devtools: { enabled: true }
})
