import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderButton from '../layouts/HeaderButton'
import WhatsAppFloat from '../layouts/WhatsAppFloat'

const Header = () => {
    const { t } = useTranslation();
    const [isAtBottom, setIsAtBottom] = useState(false);

    // Initialize dark mode from localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        const isDark = savedMode === 'Dark';
        const modeSwitch = document.getElementById('mode-switch');

        // Apply dark mode class based on saved preference
        if (isDark) {
            document.documentElement.classList.add('dark-mode');
            if (modeSwitch) {
                modeSwitch.checked = true;
            }
        } else {
            // Ensure light mode is default
            document.documentElement.classList.remove('dark-mode');
            if (modeSwitch) {
                modeSwitch.checked = false;
            }
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset + window.innerHeight;
            const bottomPosition = document.documentElement.scrollHeight;

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

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = (e) => {
        const isChecked = e.target.checked;

        if (isChecked) {
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('mode', 'Dark');
        } else {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('mode', 'Light');
        }
    }

    return (
        <div>
            <div className="Header">
                <h1>{`${t('header.greeting')} ${t('header.name')}`}</h1>
                <p className='line-1 anim-typewriter' style={{ position: 'absolute', top: '58%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto', maxWidth: '90%', fontSize: 'clamp(0.8rem, 2vw, 1.2rem)' }}>{t('header.title')}</p>
                <label className="switch">
                    <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox" />
                    <span className="slider round">
                        <i className="fas fa-sun slider-icon sun-icon"></i>
                        <i className="fas fa-moon slider-icon moon-icon"></i>
                    </span>
                </label>
                <HeaderButton />
            </div>
            <img
                onClick={scrollTo}
                alt="Contact Me"
                title="Contact Me"
                className={`gtp ${isAtBottom ? 'hidden-at-bottom' : ''}`}
                src="https://avatars.githubusercontent.com/u/36890044?v=4"
            />
            <WhatsAppFloat />
        </div>
    )

}

export default Header;