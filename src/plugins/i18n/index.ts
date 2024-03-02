import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from '@/locales/ar.json'
import en from '@/locales/en.json'
i18n.use(initReactI18next).init({
    resources: {
        ar: { translation: ar },
        en: { translation: en },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

i18n.on('languageChanged', (lng) => { 
    document.documentElement.lang = lng;
    document.documentElement.dir = i18n.dir(); 
})

export const locale = i18n.language;
export default i18n;
