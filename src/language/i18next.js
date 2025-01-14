import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import esLogin from '../jsx/pages/locales/es.json';
import enLogin from '../jsx/pages/locales/en.json';

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'es',
    fallbackLng: 'en',
    resources: {
        en: {
            login: enLogin,
        },
        es: {
            login: esLogin,
        },
    },
})

export default i18next
