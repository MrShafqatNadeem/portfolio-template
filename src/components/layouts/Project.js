import React from 'react'

const Project = ({ id, name, url, androidUrl, iosUrl, skills }) => {
    return (
        <div data-aos="fade-up" className="col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <div className="project-info">
                <h2 className="project-title">{name}</h2>

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
