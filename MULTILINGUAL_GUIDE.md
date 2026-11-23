# Languages

The Vite app loads every JSON file in `src/locales/` and exposes the 27 supported languages through the language control in the navigation. The browser language is used on first visit, and the selected language is saved locally. Arabic and Urdu set right-to-left document direction.

The navigation, contact form, resume actions, and shared labels use the translation dictionaries. Project, experience, skills, and service descriptions remain in their authored English.

To add a locale:

1. Add a JSON dictionary under `src/locales/`.
2. Add its native name and flag to `src/components/layouts/LanguageSwitcher.js`.
3. Keep the keys in the dictionary aligned with `src/locales/en.json`.

The dictionaries are loaded with Vite's `import.meta.glob` in `src/i18n.js`; no manual registration list is needed.
