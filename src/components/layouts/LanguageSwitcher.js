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
