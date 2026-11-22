import React from "react";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export const Services = () => {
  const { services, personal } = portfolioData;

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Icon name="layers" size={14} />
            <span>Consulting & Engineering</span>
          </div>
          <h2 className="section-title">
            How I Can <span className="section-title-gradient">Add Value</span>
          </h2>
          <p className="section-subtitle">
            Whether architecting a greenfield Flutter mobile product, refactoring enterprise legacy code, or optimizing for 60 FPS zero-jank performance.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                <Icon name={service.icon} size={26} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resume Banner */}
        <div style={{ marginTop: "60px" }}>
          <div className="resume-banner">
            <div>
              <h3 className="resume-banner-title">Need a Comprehensive Technical CV?</h3>
              <p className="resume-banner-subtitle">
                Download my latest updated resume containing complete project breakdowns, architectural patterns, and verified client deliverables.
              </p>
            </div>
            <div className="resume-banner-actions">
              <a
                href={personal.resumeUrl}
                download={personal.resumeFilename}
                className="btn btn-primary"
              >
                <Icon name="download" size={18} />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Icon name="external-link" size={16} />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
