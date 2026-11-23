import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { trackLanguageChange } from '../../utils/analytics';
import './LanguageSwitcher.css';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'sr', name: 'Српски', flag: '🇷🇸' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentCode = (i18n.resolvedLanguage || i18n.language || 'en')
    .split('-')[0];
  const currentLanguage = languages.find((language) => language.code === currentCode) || languages[0];

  const handleLanguageChange = (languageCode) => {
    trackLanguageChange(currentCode, languageCode);
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" onKeyDown={(event) => {
      if (event.key === 'Escape') setIsOpen(false);
    }}>
      <button
        type="button"
        className="language-button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={`Language: ${currentLanguage.name}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="flag" aria-hidden="true">{currentLanguage.flag}</span>
        <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`} aria-hidden="true">▼</span>
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="language-overlay"
            aria-label="Close language menu"
            onClick={() => setIsOpen(false)}
            tabIndex={-1}
          />
          <div className="language-dropdown" role="listbox" aria-label="Languages">
            {languages.map((language) => (
              <button
                type="button"
                key={language.code}
                className={`language-option ${currentCode === language.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(language.code)}
                role="option"
                aria-selected={currentCode === language.code}
                data-analytics-event="true"
              >
                <span className="flag" aria-hidden="true">{language.flag}</span>
                <span className="language-name">{language.name}</span>
                {currentCode === language.code && <span className="checkmark" aria-hidden="true">✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
