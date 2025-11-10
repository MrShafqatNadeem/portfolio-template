import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'

const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = (e) => {
        document.documentElement.classList.toggle('dark-mode')
        const notDark = document.getElementById('not-dark');
        const notDark2 = document.getElementById('not-dark2');

        if (notDark) notDark.classList.toggle('inverse-dark');
        if (notDark2) notDark2.classList.toggle('inverse-dark');

        var x = document.getElementsByClassName('img-pro')
        for (let i = 0; i < x.length; i += 1) {
            x.item(i).classList.toggle("inverse-dark");
        }

        if (document.documentElement.classList.contains('dark-mode'))
            localStorage.setItem('mode', 'Dark')
        else
            localStorage.setItem('mode', 'Light')
    }

    return (
        <div>
            <div className="Header">
                <h1>{`I'm ${header.name}`}</h1>
                <p className='line-1 anim-typewriter' style={{ position: 'absolute', top: '58%', left: '50%', transform: 'translate(-50%, -50%)', width: 'auto', maxWidth: '90%', fontSize: 'clamp(0.8rem, 2vw, 1.2rem)' }}>{header.title}</p>
                <label className="switch">
                    <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <HeaderButton />
            </div>
            <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="https://avatars.githubusercontent.com/u/36890044?v=4"></img>
        </div>
    )

}

export default Header;