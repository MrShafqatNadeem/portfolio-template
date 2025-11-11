import React, { useState, useEffect } from 'react';

const ExperienceCard = ({ exp, index }) => {
    const [logoUrl, setLogoUrl] = useState(null);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompanyLogo = async () => {
            try {
                // If direct logo URL is provided, use it
                if (exp.logo) {
                    setLogoUrl(exp.logo);
                    setShowPlaceholder(false);
                    setLoading(false);
                    return;
                }

                // If website is provided, extract domain and use Clearbit
                if (exp.website) {
                    try {
                        const url = new URL(exp.website);
                        const domain = url.hostname.replace('www.', '');
                        const clearbitUrl = `https://logo.clearbit.com/${domain}`;

                        // Test if Clearbit URL works
                        const img = new Image();
                        img.onload = () => {
                            setLogoUrl(clearbitUrl);
                            setShowPlaceholder(false);
                            setLoading(false);
                        };
                        img.onerror = () => {
                            // If Clearbit fails, try fetching via proxy
                            fetchViaProxy();
                        };
                        img.src = clearbitUrl;
                        return;
                    } catch (urlError) {
                        console.log('Invalid website URL, trying alternatives...');
                    }
                }

                // Fallback: Try fetching from LinkedIn
                fetchViaProxy();

            } catch (error) {
                console.error('Error fetching logo:', error);
                setShowPlaceholder(true);
                setLoading(false);
            }
        };

        const fetchViaProxy = async () => {
            try {
                // Extract company name from LinkedIn URL
                const companyMatch = exp.linkedinUrl.match(/\/company\/([^/]+)/);
                if (!companyMatch) {
                    setShowPlaceholder(true);
                    setLoading(false);
                    return;
                }

                const companySlug = companyMatch[1];

                // Try using a CORS proxy to fetch the LinkedIn page
                const proxyUrl = 'https://api.allorigins.win/get?url=';
                const linkedinPageUrl = encodeURIComponent(exp.linkedinUrl);

                try {
                    const response = await fetch(proxyUrl + linkedinPageUrl);
                    const data = await response.json();
                    const html = data.contents;

                    // Extract logo URL from HTML using regex
                    const logoRegex = /https:\/\/media\.licdn\.com\/dms\/image\/[^"'\s]*company-logo[^"'\s]*/g;
                    const matches = html.match(logoRegex);

                    if (matches && matches.length > 0) {
                        // Get the first match (usually the main logo)
                        const cleanedUrl = matches[0].replace(/&amp;/g, '&');
                        setLogoUrl(cleanedUrl);
                        setShowPlaceholder(false);
                        setLoading(false);
                        return;
                    }
                } catch (proxyError) {
                    console.log('Proxy method failed, trying Clearbit with slug...');
                }

                // Last resort: Try Clearbit with company slug
                const clearbitUrl = `https://logo.clearbit.com/${companySlug}.com`;
                const img = new Image();
                img.onload = () => {
                    setLogoUrl(clearbitUrl);
                    setShowPlaceholder(false);
                    setLoading(false);
                };
                img.onerror = () => {
                    // All methods failed, show placeholder
                    setShowPlaceholder(true);
                    setLoading(false);
                };
                img.src = clearbitUrl;

            } catch (error) {
                console.error('Error in fetchViaProxy:', error);
                setShowPlaceholder(true);
                setLoading(false);
            }
        };

        fetchCompanyLogo();
    }, [exp.linkedinUrl, exp.company, exp.logo, exp.website]);

    const handleImageError = () => {
        setShowPlaceholder(true);
    };

    return (
        <div
            className="experience-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => window.open(exp.linkedinUrl, '_blank')}
            style={{ cursor: 'pointer' }}
        >
            <div className="experience-card-content">
                <div className="experience-logo">
                    {!showPlaceholder && logoUrl ? (
                        <img
                            src={logoUrl}
                            alt={`${exp.company} logo`}
                            className="company-logo-image"
                            onError={handleImageError}
                        />
                    ) : null}
                    <div
                        className="company-logo-placeholder"
                        style={{ display: (!logoUrl || showPlaceholder) ? 'flex' : 'none' }}
                    >
                        {loading ? (
                            <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                            <i className="fas fa-building"></i>
                        )}
                    </div>
                </div>
                <div className="experience-details">
                    <h3 className="experience-position">{exp.position}</h3>
                    <h4 className="experience-company">
                        {exp.company}
                        <i className="fab fa-linkedin experience-linkedin-icon" style={{ marginLeft: '8px' }}></i>
                    </h4>
                    <p className="experience-location">{exp.location} • {exp.period}</p>
                    <p className="experience-description">{exp.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
