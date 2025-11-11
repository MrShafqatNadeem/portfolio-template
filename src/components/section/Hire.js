import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHire } from '../../context/HireContext'

const Hire = () => {
    const { t } = useTranslation();
    const { selectedPackage, setSelectedPackage } = useHire();

    const scrollToContact = () => {
        document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
    };

    const handlePackageSelect = (packageType) => {
        setSelectedPackage(packageType);
        // Scroll to contact after a brief delay
        setTimeout(() => {
            scrollToContact();
        }, 300);
    };

    return (
        <div className="hire-section" data-aos="fade-up" data-aos-once="true">
            <div className="container">
                <div className="hire-header text-center">
                    <h1 className="hire-title">{t('hire.title')}</h1>
                    <h3 className="hire-subtitle">{t('hire.subtitle')}</h3>
                    <p className="hire-pitch">{t('hire.pitch')}</p>
                </div>

                <div className="services-grid">
                    <h2 className="services-title text-center">{t('hire.services.title')}</h2>
                    <div className="row">
                        <div className="col-12 col-md-4 service-card" data-aos="zoom-in" data-aos-delay="100">
                            <div className="service-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <h4>{t('hire.services.development.title')}</h4>
                            <p>{t('hire.services.development.description')}</p>
                        </div>
                        <div className="col-12 col-md-4 service-card" data-aos="zoom-in" data-aos-delay="200">
                            <div className="service-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h4>{t('hire.services.consulting.title')}</h4>
                            <p>{t('hire.services.consulting.description')}</p>
                        </div>
                        <div className="col-12 col-md-4 service-card" data-aos="zoom-in" data-aos-delay="300">
                            <div className="service-icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h4>{t('hire.services.optimization.title')}</h4>
                            <p>{t('hire.services.optimization.description')}</p>
                        </div>
                    </div>
                </div>

                <div className="pricing-section">
                    <h2 className="pricing-title text-center">{t('hire.pricing.title')}</h2>
                    <div className="row">
                        <div
                            className={`col-12 col-md-4 pricing-card ${selectedPackage === 'starter' ? 'selected' : ''}`}
                            data-aos="flip-left"
                            data-aos-delay="100"
                            onClick={() => handlePackageSelect('starter')}
                        >
                            <div className="pricing-header">
                                <h4>{t('hire.pricing.starter.title')}</h4>
                                <div className="pricing-rate">{t('hire.pricing.starter.rate')}</div>
                            </div>
                            <p>{t('hire.pricing.starter.description')}</p>
                            <button className="select-package-btn">
                                {selectedPackage === 'starter' ? t('hire.pricing.selected') : t('hire.pricing.selectPackage')}
                            </button>
                        </div>
                        <div
                            className={`col-12 col-md-4 pricing-card featured ${selectedPackage === 'ongoing' ? 'selected' : ''}`}
                            data-aos="flip-left"
                            data-aos-delay="200"
                            onClick={() => handlePackageSelect('ongoing')}
                        >
                            <div className="featured-badge">{t('hire.pricing.popular')}</div>
                            <div className="pricing-header">
                                <h4>{t('hire.pricing.ongoing.title')}</h4>
                                <div className="pricing-rate">{t('hire.pricing.ongoing.rate')}</div>
                            </div>
                            <p>{t('hire.pricing.ongoing.description')}</p>
                            <button className="select-package-btn">
                                {selectedPackage === 'ongoing' ? t('hire.pricing.selected') : t('hire.pricing.selectPackage')}
                            </button>
                        </div>
                        <div
                            className={`col-12 col-md-4 pricing-card ${selectedPackage === 'enterprise' ? 'selected' : ''}`}
                            data-aos="flip-left"
                            data-aos-delay="300"
                            onClick={() => handlePackageSelect('enterprise')}
                        >
                            <div className="pricing-header">
                                <h4>{t('hire.pricing.enterprise.title')}</h4>
                                <div className="pricing-rate">{t('hire.pricing.enterprise.rate')}</div>
                            </div>
                            <p>{t('hire.pricing.enterprise.description')}</p>
                            <button className="select-package-btn">
                                {selectedPackage === 'enterprise' ? t('hire.pricing.selected') : t('hire.pricing.selectPackage')}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hire-cta text-center" data-aos="zoom-in">
                    <h3>{t('hire.cta')}</h3>
                    <button onClick={scrollToContact} className="hire-button">
                        {t('hire.ctaButton')} <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hire
