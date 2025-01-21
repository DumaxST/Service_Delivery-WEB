import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import esLogin from '../jsx/pages/locales/login/es.json';
import enLogin from '../jsx/pages/locales/login/en.json';

import esDashboard from '../jsx/pages/locales/dashboard/es.json';
import enDashboard from '../jsx/pages/locales/dashboard/en.json';

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'es',
    fallbackLng: 'en',
    resources: {
        en: {
            login: enLogin,
            dashboard: enDashboard,
        },
        es: {
            login: esLogin,
            dashboard: esDashboard,
        },
    },
})

export default i18next
