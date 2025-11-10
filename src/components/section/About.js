import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'

const About = () => {
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                {/* <div className="col-12 d-none d-md-block offset-md-1 col-md-3 Photo" id="not-dark2"></div> */}
                <div className="col-12 offset-md-1 col-md-10 about">
                    <div className="About-title-box">
                        <h1 id="About" className="red-line">{section2title}</h1>
                    </div>
                    <div className="lead about-text">
                        {about.paragraph.split('\n\n').map((para, index) => (
                            <p key={index} style={{ marginBottom: '1.2rem' }}>{para}</p>
                        ))}
                    </div>
                    <div className="experience-section" style={{ marginTop: '2rem' }}>
                        <h5 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: '600' }}>
                            Professional Experience
                        </h5>
                        <p className="lead">⦿ Senior Flutter Software Engineer at <strong>WithU Group</strong> — London, UK (Remote)</p>
                        <p className="lead">⦿ Ex Mobile App Developer at <strong>CloudMedx</strong> — New York/New Jersey, US (Remote)</p>
                        <p className="lead">⦿ Ex Flutter Developer at <strong>TransData</strong> — Lahore</p>
                        <p className="lead">⦿ Ex Flutter Developer at <strong>Absolute Solutions</strong> — Lahore, US & KSA</p>
                        <p className="lead">⦿ Ex Flutter Developer at <strong>AllianceTech Pvt. Ltd</strong> — Lahore & UK</p>
                        <p className="lead">⦿ Ex Flutter Developer at <strong>Red Code Technologies</strong> — Lahore</p>
                    </div>

                </div>
            </div>
            <div id="Skills">
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) =>
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} />
                    )}̀
                </div>
            </div>
        </div>
    )
}

export default About
