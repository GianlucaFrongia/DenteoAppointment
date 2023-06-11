// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: { baseURL: "/DenteoAppointment/" },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],

  devtools: { enabled: true },
  imports: {
    dirs: ['stores'],
  },
})
