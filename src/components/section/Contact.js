import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHire } from '../../context/HireContext'
import { social } from '../../profile'

const Contact = () => {
    const { t } = useTranslation();
    const { selectedPackage } = useHire();
    const [subject, setSubject] = useState('');

    // Initialize subject when package is selected
    useEffect(() => {
        if (selectedPackage) {
            const packageNames = {
                starter: t('hire.pricing.starter.title'),
                ongoing: t('hire.pricing.ongoing.title'),
                enterprise: t('hire.pricing.enterprise.title')
            };
            setSubject(`Inquiry: ${packageNames[selectedPackage]}`);
        }
    }, [selectedPackage, t]);

    return (
        <div className="contact-section-modern">
            <div data-aos="zoom-in-up" data-aos-once="true" className="contact-container">
                <div className="contact-header text-center mx-auto">
                    <h1 id="Contact" className="red-line">{t('contact.title')}</h1>
                    <p className="contact-subtitle">{t('contact.pitch')}</p>
                </div>

                <div className="container">
                    <div className="contact-content">
                        <div className="contact-form-col">
                            <div className="modern-card">
                                <form action="mailto:shafqatnadeem2@gmail.com" method="GET" className="modern-form">
                                    <div className="form-row-group">
                                        <div className="form-group">
                                            <label htmlFor="fname">{t('contact.form.name')}</label>
                                            <input
                                                type="text"
                                                id="fname"
                                                name="firstname"
                                                placeholder="John Doe"
                                                required
                                                className="modern-input"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mailid">{t('contact.form.email')}</label>
                                            <input
                                                type="email"
                                                id="mailid"
                                                name="Email"
                                                placeholder="john@example.com"
                                                required
                                                className="modern-input"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="sub">{t('contact.form.subject')}</label>
                                        <input
                                            type="text"
                                            id="sub"
                                            name="Subject"
                                            placeholder="How can I help you?"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            required
                                            className="modern-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="msg">{t('contact.form.message')}</label>
                                        <textarea
                                            id="msg"
                                            name="message"
                                            placeholder="Tell me about your project..."
                                            required
                                            className="modern-textarea"
                                            rows="5"
                                        />
                                    </div>
                                    <button type="submit" className="modern-submit-btn">
                                        <span>{t('contact.form.send')}</span>
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="contact-info-col">
                            <div className="modern-card contact-info-card">
                                <h3 className="info-title">Let's Connect</h3>
                                <p className="info-description">
                                    Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities.
                                </p>

                                <div className="social-links-modern">
                                    {social.linkedin && (
                                        <a title="LinkedIn" rel="noopener noreferrer" target="_blank" href={social.linkedin} className="social-link-modern linkedin">
                                            <i className="fab fa-linkedin"></i>
                                            <span>LinkedIn</span>
                                        </a>
                                    )}
                                    {social.github && (
                                        <a title="GitHub" rel="noopener noreferrer" target="_blank" href={social.github} className="social-link-modern github">
                                            <i className="fab fa-github"></i>
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                    {social.twitter && (
                                        <a title="Twitter" rel="noopener noreferrer" target="_blank" href={social.twitter} className="social-link-modern twitter">
                                            <i className="fab fa-twitter"></i>
                                            <span>Twitter</span>
                                        </a>
                                    )}
                                    {social.instagram && (
                                        <a title="Instagram" rel="noopener noreferrer" target="_blank" href={social.instagram} className="social-link-modern instagram">
                                            <i className="fab fa-instagram"></i>
                                            <span>Instagram</span>
                                        </a>
                                    )}
                                    {social.facebook && (
                                        <a title="Facebook" rel="noopener noreferrer" target="_blank" href={social.facebook} className="social-link-modern facebook">
                                            <i className="fab fa-facebook"></i>
                                            <span>Facebook</span>
                                        </a>
                                    )}
                                </div>

                                {social.resume && (
                                    <a title="Download Resume" href={social.resume} download="Shafqat_Nadeem_Resume.pdf" className="resume-download-btn">
                                        <i className="fas fa-download"></i>
                                        <span>Download Resume</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p id="not-dark" className="Copy text-center">2025 © Copyright <strong>{t('header.name')}</strong>. {t('contact.copyright')}</p>
        </div>
    )
}

export default Contact
