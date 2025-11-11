import React from 'react'
import { useTranslation } from 'react-i18next'
import Skills from '../layouts/Skills'
import { skillsBar } from '../../profile'

const About = () => {
    const { t } = useTranslation();
    
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                {/* <div className="col-12 d-none d-md-block offset-md-1 col-md-3 Photo" id="not-dark2"></div> */}
                <div className="col-12 offset-md-1 col-md-10 about">
                    <div className="About-title-box">
                        <h1 id="About" className="red-line">{t('about.title')}</h1>
                    </div>
                    <div className="lead about-text">
                        {t('about.paragraph').split('\n\n').map((para, index) => (
                            <p key={index} style={{ marginBottom: '1.2rem' }}>{para}</p>
                        ))}
                    </div>
                    <div className="experience-section" style={{ marginTop: '2rem' }}>
                        <h5 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>
                            {t('about.experience.title')}
                        </h5>
                        <p className="lead">⦿ {t('about.experience.withu')}</p>
                        <p className="lead">⦿ {t('about.experience.cloudmedx')}</p>
                        <p className="lead">⦿ {t('about.experience.transdata')}</p>
                        <p className="lead">⦿ {t('about.experience.absolute')}</p>
                        <p className="lead">⦿ {t('about.experience.alliancetech')}</p>
                        <p className="lead">⦿ {t('about.experience.redcode')}</p>
                    </div>

                </div>
            </div>
            <div id="Skills">
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) =>
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default About
