import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'

const About = () => {
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
            <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not-dark2"></div>
            <div className="col-12 offset-md-1 col-md-6 about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{section2title}</h1>
                </div>
                <p className="lead about-text">
                    {about.paragraph}  
                </p>
                <p className="lead ">⦿ Senior Mobile App Developer at CloudMedx New York | New Jersey | US.</p>
                <p className="lead ">⦿ Senior Flutter Developer at TransData Lahore.</p>
                <p className="lead ">⦿ Ex Senior Flutter Developer at Absolute Solutions Lahore & US & KSA.</p>
                <p className="lead ">⦿ Ex Senior Flutter Developer at AllianceTech Pvt. Ltd Lahore & UK. </p>
                <p className="lead ">⦿ Ex Flutter Developer Red Code at Technologies Lahore.</p>

            </div>
            </div>
            <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) => 
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                    )}̀
                </div> 
            </div>
        </div>
    )
}

export default About
