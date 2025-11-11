# Multi-Locale Support Documentation

## Overview
This portfolio now supports **8 languages** with automatic locale detection based on user's geographic location.

## Supported Languages
1. **English (en)** - Default language, covers UK, USA, Canada, Australia
2. **Arabic (ar)** - Middle East (UAE, Saudi Arabia, Qatar, etc.)
3. **French (fr)** - France, parts of Canada, Belgium, Switzerland
4. **German (de)** - Germany, Austria, Switzerland  
5. **Spanish (es)** - Spain, Latin America, USA Hispanic population
6. **Portuguese (pt)** - Portugal, Brazil
7. **Norwegian (no)** - Norway
8. **Swedish (sv)** - Sweden

## Features

### 1. Automatic Language Detection
- **Geolocation-based**: Uses IP-based geolocation API (`ipapi.co`) to detect user's country and automatically sets the appropriate language
- **Browser language fallback**: If geolocation fails, falls back to browser's preferred language
- **localStorage persistence**: Saves user's language preference in localStorage

### 2. Manual Language Switcher
- Floating language switcher button in the top-right corner
- Displays current language with flag emoji
- Dropdown menu with all available languages
- Visual feedback for selected language
- Smooth animations and transitions

### 3. RTL Support
- Full right-to-left layout support for Arabic
- Automatic text direction switching
- Proper alignment of UI elements
- Mixed content handling (keeps technical terms in LTR)

### 4. Translation Coverage
All major UI text is translated including:
- Header title and name
- About section (professional summary and experience)
- Works section (projects title and buttons)
- Contact form (labels and messages)
- Navigation elements

## How It Works

### Detection Flow
```
1. Check localStorage for saved preference
   ↓ (if not found)
2. Try geolocation-based detection via IP
   ↓ (if fails)
3. Use browser's language setting
   ↓
4. Fallback to English (en)
```

### Country to Language Mapping
The system intelligently maps countries to their primary language:
- Middle Eastern countries → Arabic
- European countries → Respective languages (French, German, Spanish, etc.)
- Nordic countries → Norwegian, Swedish
- English-speaking countries → English
- And many more...

## File Structure
```
src/
├── locales/
│   ├── en.json    # English translations
│   ├── ar.json    # Arabic translations
│   ├── fr.json    # French translations
│   ├── de.json    # German translations
│   ├── es.json    # Spanish translations
│   ├── pt.json    # Portuguese translations
│   ├── no.json    # Norwegian translations
│   └── sv.json    # Swedish translations
├── i18n.js        # i18next configuration with geolocation
├── components/
│   └── layouts/
│       ├── LanguageSwitcher.js    # Language selector component
│       └── LanguageSwitcher.css   # Styles for language switcher
└── styles/
    └── rtl.css    # RTL-specific styles
```

## Usage for Developers

### Adding a New Translation Key
1. Add the key to all language files in `src/locales/`
2. Use it in your component:
```javascript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
    const { t } = useTranslation();
    return <h1>{t('your.new.key')}</h1>;
};
```

### Adding a New Language
1. Create a new JSON file in `src/locales/` (e.g., `it.json` for Italian)
2. Add the language to `src/i18n.js`:
   - Import the translation file
   - Add to `resources` object
   - Add to `supportedLngs` array
   - Update country mapping in `detectLanguageByGeolocation()`
3. Add the language option to `LanguageSwitcher.js`

### Programmatically Changing Language
```javascript
import { useTranslation } from 'react-i18next';

const { i18n } = useTranslation();
i18n.changeLanguage('fr'); // Switch to French
```

## Technical Details

### Dependencies
- `react-i18next` - React bindings for i18next
- `i18next` - Internationalization framework
- `i18next-browser-languagedetector` - Language detection plugin

### API Used
- **ipapi.co** - Free IP geolocation API (no API key required)
  - Endpoint: `https://ipapi.co/json/`
  - Returns country code based on user's IP address

## Browser Support
Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Performance
- Translation files are imported at build time (no runtime fetching)
- Geolocation detection is async and non-blocking
- Language switcher is lightweight (<5KB)
- RTL styles only apply when Arabic is selected

## Future Enhancements
Potential improvements:
- Add more languages (Italian, Dutch, Polish, etc.)
- Server-side rendering support
- Translation management system integration
- Professional translation service integration
- Language-specific content variations

## Testing
To test different languages:
1. Use the language switcher in the top-right corner
2. Or use browser DevTools → Application → Local Storage → change `i18nextLng` value
3. Or use a VPN to test geolocation detection from different countries

## Notes
- Technical terms (project names, technologies, company names) remain in English across all languages
- The geolocation API has rate limits (30,000 requests/month for free tier)
- First-time visitors will see their local language automatically
- Returning visitors will see their previously selected language
