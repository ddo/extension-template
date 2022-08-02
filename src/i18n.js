import { createI18n } from 'vue-i18n'

import en from '@/locales/en.yml'
import vi from '@/locales/vi.yml'
import ru from '@/locales/ru.yml'
import de from '@/locales/de.yml'

const locale = 'en'

const i18n = createI18n({
    locale,
    fallbackLocale: 'en',
    messages: {
        en,
        vi,
        ru,
        de,
    },
    globalInjection: true,
    legacy: false,
})

export default {
    i18n,
    setLocale,
    getLocale,
}

function getLocale() {
    return i18n.global.locale
}

function setLocale(locale) {
    i18n.global.locale.value = locale
}