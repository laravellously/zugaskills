// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "nuxt-security",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    'pinia-plugin-persistedstate/nuxt',
    // "@prisma/nuxt",
    "@nuxt/icon",
    "@nuxt/eslint",
    "nuxt-lodash",
    'shadcn-nuxt',
    "nuxt-directus"
  ],
  icon: {
    serverBundle: {
      collections: ['uil'] // <!--- this
    }
  }
});