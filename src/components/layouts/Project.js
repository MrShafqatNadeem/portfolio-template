import React, { useEffect, useState, useRef } from 'react'

const getAppStoreId = (url) => {
    if (!url) return null;
    const match = url.match(/id(\d+)/);
    return match ? match[1] : null;
};

const getPlayStoreId = (url) => {
    if (!url) return null;
    const match = url.match(/id=([a-zA-Z0-9._-]+)/);
    return match ? match[1] : null;
};

const fetchAppStoreScreenshots = async (id) => {
    try {
        const res = await fetch(`https://itunes.apple.com/lookup?id=${id}`);
        const data = await res.json();
        const appData = data.results?.[0];

        if (!appData) return { screenshots: [], rating: null, category: null };

        // Try iPhone screenshots first, fallback to iPad screenshots
        let screenshots = appData.screenshotUrls?.slice(0, 5) || [];
        if (screenshots.length === 0) {
            screenshots = appData.ipadScreenshotUrls?.slice(0, 5) || [];
        }

        return {
            screenshots,
            rating: appData.averageUserRating || null,
            category: appData.primaryGenreName || null,
        };
    } catch (error) {
        console.error('Error fetching App Store data:', error);
        return { screenshots: [], rating: null, category: null };
    }
};

const fetchPlayStoreScreenshots = async (id) => {
    try {
        // For now, return empty data as we need backend endpoint
        // In production, you'd call: const res = await fetch(`/api/playstore?appId=${id}`);
    } catch (error) {
        console.error('Error fetching Play Store data:', error);
    }
    return { screenshots: [], rating: null, category: null };
};

const Project = ({ id, name, url, androidUrl, iosUrl, skills, downloads, category: defaultCategory, rating: defaultRating }) => {
    const [screenshots, setScreenshots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const [appRating, setAppRating] = useState(defaultRating);
    const [appCategory, setAppCategory] = useState(defaultCategory);
    const intervalRef = useRef(null);

    useEffect(() => {
        let cancelled = false;

        const loadScreenshots = async () => {
            setLoading(true);
            let data = { screenshots: [], rating: null, category: null };

            // Try App Store first
            if (iosUrl) {
                const appStoreId = getAppStoreId(iosUrl);
                if (appStoreId) {
                    data = await fetchAppStoreScreenshots(appStoreId);
                }
            }

            // If no App Store screenshots, try Play Store
            if (data.screenshots.length === 0 && androidUrl) {
                const playStoreId = getPlayStoreId(androidUrl);
                if (playStoreId) {
                    data = await fetchPlayStoreScreenshots(playStoreId);
                }
            }

            if (!cancelled) {
                setScreenshots(data.screenshots);
                // Update rating and category if fetched from API
                if (data.rating !== null) setAppRating(data.rating);
                if (data.category !== null) setAppCategory(data.category);
                setLoading(false);
            }
        };

        loadScreenshots();

        return () => {
            cancelled = true;
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [iosUrl, androidUrl]);

    // Handle index change with fade effect
    const changeSlide = (newIndex) => {
        setFading(true);
        setTimeout(() => {
            setActiveIndex(newIndex);
            setFading(false);
        }, 300); // Half of transition duration
    };

    // Auto-slide carousel
    useEffect(() => {
        if (screenshots.length > 1) {
            intervalRef.current = setInterval(() => {
                changeSlide((activeIndex + 1) % screenshots.length);
            }, 3000);

            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }
    }, [screenshots, activeIndex]);

    return (
        <div data-aos="fade-up" className="col-12 col-lg-4 project-card">
            <div className="image-project">
                {loading ? (
                    <div className={`img-pro ${id} screenshot-loading`}>
                        <div className="loading-skeleton"></div>
                    </div>
                ) : screenshots.length > 0 ? (
                    <div className="screenshot-container-wrapper">
                        <img
                            src={screenshots[activeIndex]}
                            alt={`${name} screenshot ${activeIndex + 1}`}
                            className={`screenshot-image ${fading ? 'fade-out' : 'fade-in'}`}
                        />
                        {screenshots.length > 1 && (
                            <div className="screenshot-dots">
                                {screenshots.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => changeSlide(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={`img-pro ${id}`}></div>
                )}
            </div>
            <div className="project-info">
                <h2 className="project-title">{name}</h2>

                {/* Category and Rating Row */}
                <div className="app-meta-row">
                    {appCategory && (
                        <div className="category-badge">
                            <i className="fas fa-tag"></i>
                            <span>{appCategory}</span>
                        </div>
                    )}
                    {appRating && (
                        <div className="rating-badge">
                            <i className="fas fa-star"></i>
                            <span>{appRating.toFixed(1)}</span>
                        </div>
                    )}
                </div>

                {/* Download count badge */}
                {downloads && (
                    <div className="downloads-badge">
                        <i className="fas fa-download"></i>
                        <span>{downloads} Downloads</span>
                    </div>
                )}

                {/* Skills as chips */}
                {skills && skills.length > 0 && (
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-chip">{skill}</span>
                        ))}
                    </div>
                )}

                {/* App store links below as separate items */}
                <div className="store-links-container">
                    {androidUrl && (
                        <a
                            href={androidUrl}
                            className="store-link-item android"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Download on Google Play"
                        >
                            <i className="fab fa-google-play"></i>
                            <span>Google Play</span>
                        </a>
                    )}
                    {iosUrl && (
                        <a
                            href={iosUrl}
                            className="store-link-item ios"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Download on App Store"
                        >
                            <i className="fab fa-apple"></i>
                            <span>App Store</span>
                        </a>
                    )}
                    {url && !androidUrl && !iosUrl && (
                        <a
                            href={url}
                            className="store-link-item generic"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="View Project"
                        >
                            <i className="fas fa-external-link-alt"></i>
                            <span>View Project</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project
