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
import uk from './locales/uk.json';
import ro from './locales/ro.json';
import sr from './locales/sr.json';
import bg from './locales/bg.json';
import it from './locales/it.json';
import nl from './locales/nl.json';
import pl from './locales/pl.json';
import ru from './locales/ru.json';
import tr from './locales/tr.json';
import el from './locales/el.json';
import da from './locales/da.json';
import fi from './locales/fi.json';
import cs from './locales/cs.json';
import hu from './locales/hu.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import ur from './locales/ur.json';
import hi from './locales/hi.json';

const resources = {
    en: { translation: en },
    ar: { translation: ar },
    fr: { translation: fr },
    de: { translation: de },
    es: { translation: es },
    pt: { translation: pt },
    no: { translation: no },
    sv: { translation: sv },
    uk: { translation: uk },
    ro: { translation: ro },
    sr: { translation: sr },
    bg: { translation: bg },
    it: { translation: it },
    nl: { translation: nl },
    pl: { translation: pl },
    ru: { translation: ru },
    tr: { translation: tr },
    el: { translation: el },
    da: { translation: da },
    fi: { translation: fi },
    cs: { translation: cs },
    hu: { translation: hu },
    zh: { translation: zh },
    ja: { translation: ja },
    ko: { translation: ko },
    ur: { translation: ur },
    hi: { translation: hi },
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
            'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr', 'MC': 'fr',

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

            // Ukrainian
            'UA': 'uk',

            // Romanian
            'RO': 'ro', 'MD': 'ro',

            // Serbian
            'RS': 'sr', 'BA': 'sr', 'ME': 'sr',

            // Bulgarian
            'BG': 'bg',

            // Italian
            'IT': 'it', 'SM': 'it', 'VA': 'it',

            // Dutch
            'NL': 'nl', 'SR': 'nl',

            // Polish
            'PL': 'pl',

            // Russian
            'RU': 'ru', 'BY': 'ru', 'KZ': 'ru',

            // Turkish
            'TR': 'tr', 'CY': 'tr',

            // Greek
            'GR': 'el',

            // Danish
            'DK': 'da',

            // Finnish
            'FI': 'fi',

            // Czech
            'CZ': 'cs',

            // Hungarian
            'HU': 'hu',

            // Chinese
            'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'SG': 'zh',

            // Japanese
            'JP': 'ja',

            // Korean
            'KR': 'ko', 'KP': 'ko',

            // Urdu
            'PK': 'ur',

            // Hindi
            'IN': 'hi',

            // English-speaking countries (default)
            'US': 'en', 'GB': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en',
            'CA': 'en', 'NG': 'en', 'PH': 'en',
        };

        return countryLanguageMap[countryCode] || 'en';
    } catch (error) {
        return null;
    }
}

// Apply RTL for Arabic and Urdu
i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
    document.documentElement.setAttribute('dir', (lng === 'ar' || lng === 'ur') ? 'rtl' : 'ltr');
});

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: ['en', 'ar', 'fr', 'de', 'es', 'pt', 'no', 'sv', 'uk', 'ro', 'sr', 'bg', 'it', 'nl', 'pl', 'ru', 'tr', 'el', 'da', 'fi', 'cs', 'hu', 'zh', 'ja', 'ko', 'ur', 'hi'],
        lng: 'en', // Set default language explicitly

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false, // React already escapes values
        },

        react: {
            useSuspense: false,
            bindI18n: 'languageChanged',
            bindI18nStore: '',
            transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
        },
    })
    .then(() => {
        // Initialize with geolocation detection on first load
        if (!localStorage.getItem('i18nextLng')) {
            detectLanguageByGeolocation().then(lang => {
                if (lang && lang !== i18n.language) {
                    i18n.changeLanguage(lang);
                }
            });
        }
    });

export default i18n;