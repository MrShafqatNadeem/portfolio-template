import React from "react";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Icon name="award" size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">
            Professional <span className="section-title-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            7+ years of engineering leadership, scalable mobile architecture, cloud integrations, and mentoring high-velocity engineering teams.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.position}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span>•</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                {exp.bulletPoints && (
                  <ul className="timeline-bullets">
                    {exp.bulletPoints.map((bp, i) => (
                      <li key={i} className="timeline-bullet">
                        <Icon name="check-circle" size={14} />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="timeline-skills">
                  {exp.skills.map((s, i) => (
                    <span key={i} className="tech-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
