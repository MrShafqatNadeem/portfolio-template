import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderButton from '../layouts/HeaderButton'

const Header = () => {
    const { t } = useTranslation();

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = (e) => {
        document.documentElement.classList.toggle('dark-mode')

        if (document.documentElement.classList.contains('dark-mode'))
            localStorage.setItem('mode', 'Dark')
        else
            localStorage.setItem('mode', 'Light')
    }

    return (
        <div>
            <div className="Header">
                <h1>{`${t('header.greeting')} ${t('header.name')}`}</h1>
                <p className='line-1 anim-typewriter' style={{ position: 'absolute', top: '58%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto', maxWidth: '90%', fontSize: 'clamp(0.8rem, 2vw, 1.2rem)' }}>{t('header.title')}</p>
                <label className="switch">
                    <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <HeaderButton />
            </div>
            <img onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="https://avatars.githubusercontent.com/u/36890044?v=4"></img>
        </div>
    )

}

export default Header;