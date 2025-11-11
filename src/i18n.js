import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import en from './locales/en.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import no from './locales/no.json';
import sv from './locales/sv.json';

const resources = {
    en: { translation: en },
    ar: { translation: ar },
    fr: { translation: fr },
    de: { translation: de },
    es: { translation: es },
    pt: { translation: pt },
    no: { translation: no },
    sv: { translation: sv },
};

// Custom language detector that includes geolocation
const customDetector = {
    name: 'customDetector',

    async lookup() {
        // First check localStorage
        const stored = localStorage.getItem('i18nextLng');
        if (stored) return stored;

        // Then try geolocation-based detection
        try {
            const geoLang = await detectLanguageByGeolocation();
            if (geoLang) {
                localStorage.setItem('i18nextLng', geoLang);
                return geoLang;
            }
        } catch (error) {
            console.log('Geolocation detection failed:', error);
        }

        // Fall back to browser language
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.split('-')[0];
    },

    cacheUserLanguage(lng) {
        localStorage.setItem('i18nextLng', lng);
    }
};

// Detect language based on user's geographic location
async function detectLanguageByGeolocation() {
    try {
        // Get user's location using IP-based geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        const countryCode = data.country_code;

        // Map countries to languages
        const countryLanguageMap = {
            // Middle East - Arabic
            'AE': 'ar', 'SA': 'ar', 'QA': 'ar', 'KW': 'ar', 'BH': 'ar', 'OM': 'ar',
            'JO': 'ar', 'LB': 'ar', 'EG': 'ar', 'IQ': 'ar', 'SY': 'ar', 'YE': 'ar',

            // French-speaking countries
            'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'CA': 'fr', 'LU': 'fr', 'MC': 'fr',

            // German-speaking countries
            'DE': 'de', 'AT': 'de', 'LI': 'de',

            // Spanish-speaking countries
            'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es',
            'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es',
            'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es', 'CR': 'es', 'PA': 'es',
            'UY': 'es', 'GQ': 'es',

            // Portuguese-speaking countries
            'PT': 'pt', 'BR': 'pt', 'AO': 'pt', 'MZ': 'pt',

            // Norwegian
            'NO': 'no',

            // Swedish
            'SE': 'sv',

            // English-speaking countries (default)
            'US': 'en', 'GB': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en',
            'CA': 'en', 'IN': 'en', 'PK': 'en', 'NG': 'en', 'PH': 'en',
        };

        return countryLanguageMap[countryCode] || 'en';
    } catch (error) {
        console.error('Failed to detect location:', error);
        return null;
    }
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: ['en', 'ar', 'fr', 'de', 'es', 'pt', 'no', 'sv'],

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false, // React already escapes values
        },

        react: {
            useSuspense: false,
        },
    });

// Apply RTL for Arabic
i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
    document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
});

// Initialize with geolocation detection on first load
if (!localStorage.getItem('i18nextLng')) {
    detectLanguageByGeolocation().then(lang => {
        if (lang && lang !== i18n.language) {
            i18n.changeLanguage(lang);
        }
    });
}

export default i18n;
