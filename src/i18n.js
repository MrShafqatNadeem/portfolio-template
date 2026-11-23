import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const localeFiles = import.meta.glob('./locales/*.json', {
    eager: true,
    import: 'default',
});

const resources = Object.fromEntries(
    Object.entries(localeFiles).map(([path, translation]) => {
        const language = path.slice(path.lastIndexOf('/') + 1, -5);
        return [language, { translation }];
    })
);

const setDocumentLanguage = (language) => {
    const baseLanguage = language.split('-')[0];
    document.documentElement.lang = language;
    document.documentElement.dir = ['ar', 'ur'].includes(baseLanguage) ? 'rtl' : 'ltr';
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: Object.keys(resources),
        load: 'languageOnly',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    })
    .then(() => setDocumentLanguage(i18n.resolvedLanguage || i18n.language));

i18n.on('languageChanged', setDocumentLanguage);

export default i18n;
