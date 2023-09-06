// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }
,
 css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css',"@/assets/scss/main.scss","@/assets/fonts/stylesheet.css"],
build: {
  transpile: ['vuetify'],
},
vite: {
  define: {
    'process.env.DEBUG': false,
  },
},
modules: [
  '@nuxtjs/i18n',
],
i18n: {
  locales: [
    {
      code: "ar",
      file: "ar.json",
      name: "arabic",
      icon: "$arabicIcon"
    },
    {
      code: "en",
      file: "en.json",
      name: "english",
      icon: "$englishIcon"
    }
  ],
  defaultLocale: "ar",
  strategy: "prefix_and_default",
  langDir: "locales/",
  lazy: true,
  useCookie: true,
  cookieKey: "language",
  detectBrowserLanguage: false,
  vueI18n: "./nuxt-i18n.js"
},

vuetify: {
  vuetifyOptions: {
    ssr: true,
    defaults: {
      global: {
        ripple: true,
      },
    },
    // theme: { defaultTheme: 'dark' },
  },
  moduleOptions: {
    treeshaking: true,
    styles: true,
    autoImport: true,
    useVuetifyLabs: true,
  },
},
})
