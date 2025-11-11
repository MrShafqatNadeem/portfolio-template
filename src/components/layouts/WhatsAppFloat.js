
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const WhatsAppFloat = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset + window.innerHeight;
            const bottomPosition = document.documentElement.scrollHeight;

            // Check if scrolled more than 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Check if at bottom (within 100px threshold)
            if (bottomPosition - scrollPosition < 100) {
                setIsAtBottom(true);
            } else {
                setIsAtBottom(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    };

    const openWhatsApp = (e) => {
        e.stopPropagation();
        const phoneNumber = '12134692225';
        const message = encodeURIComponent(t('common.whatsappMessage'));
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div
            className={`whatsapp-float ${isVisible ? 'visible' : ''} ${isAtBottom ? 'at-bottom' : ''}`}
            onClick={isAtBottom ? openWhatsApp : handleClick}
            title="Chat on WhatsApp"
        >
            <div className="whatsapp-icon-wrapper">
                <i className="fab fa-whatsapp"></i>
            </div>
        </div>
    );
};

export default WhatsAppFloat;
