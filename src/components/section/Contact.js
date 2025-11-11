import React from 'react'
import { useTranslation } from 'react-i18next'
import { social } from '../../profile'

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                <>
                    <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{t('contact.title')}</h1>
                    </div>
                </>
                <div className="container">
                    <div className="git-cont row">
                        <div className="col-12 col-sm-6 half">
                            <form action="mailto:shafqatnadeem2@gmail.com" method="GET">
                                <input type="text" id="fname" name="firstname" placeholder={t('contact.form.name')} required></input>
                                <input type="mail" id="mailid" name="Email" placeholder={t('contact.form.email')} required></input>
                                <input type="text" id="sub" name="Subject" placeholder={t('contact.form.subject')} required></input>
                                <textarea id="msg" name="message" placeholder={t('contact.form.message')} required></textarea>
                                <button style={{ cursor: 'pointer' }} type="submit">{t('contact.form.send')}</button>
                            </form>
                        </div>
                        <div className="col-12 col-sm-6 half">
                            <p className="lead">
                                {t('contact.pitch')}
                            </p>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="inline-block">
                                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                                    {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                                    {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br />
                                </div>
                                {social.resume && <a title="Download Resume" href={social.resume} download="Shafqat_Nadeem_Resume.pdf"><i className="fas fa-download"></i></a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p id="not-dark" className="Copy">2025 © Copyright <strong>{t('header.name')}</strong>. {t('contact.copyright')}</p>
        </div>
    )

}

export default Contact
