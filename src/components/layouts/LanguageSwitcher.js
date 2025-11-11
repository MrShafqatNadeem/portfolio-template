import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

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

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="language-switcher">
            <button
                className="language-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select language"
            >
                <span className="current-language">
                    <span className="flag">{currentLanguage.flag}</span>
                    <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
                </span>
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
            </button>

            {isOpen && (
                <>
                    <div className="overlay" onClick={() => setIsOpen(false)}></div>
                    <div className="language-dropdown">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                className={`language-option ${i18n.language === language.code ? 'active' : ''}`}
                                onClick={() => handleLanguageChange(language.code)}
                            >
                                <span className="flag">{language.flag}</span>
                                <span className="language-name">{language.name}</span>
                                {i18n.language === language.code && <span className="checkmark">✓</span>}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSwitcher;
