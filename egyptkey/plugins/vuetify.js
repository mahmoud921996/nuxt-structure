// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives';
import { fa } from 'vuetify/locale'
import { aliases, mdi } from "vuetify/iconsets/mdi";

import cowIcon from '~/assets/icons/cow-icon'
import arrowDown from '~/assets/icons/arrow-down.vue'
import resendIcon from '~/assets/icons/resend'
import offerIcon from '~/assets/icons/offer'
import arabicIcon from '~/assets/icons/arabicIcon'
import englishIcon from '~/assets/icons/englishIcon'


const aliasesCustom = {
  ...aliases,
  arrowDown,
  arabicIcon,
  cowIcon,
  resendIcon,
  offerIcon,
  englishIcon
}
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      locale: 'fa',
      fallback: 'fa',
      messages: { fa },
      rtl: {fa: true},
    },
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliasesCustom
      },
      sets: {
        mdi,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})