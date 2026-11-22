import React, { useState } from "react";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Fitness & Health", value: "fitness" },
    { label: "On-Demand Services", value: "ondemand" },
    { label: "Utilities", value: "utility" },
    { label: "Healthcare", value: "healthcare" },
    { label: "Open Source", value: "opensource" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categorySlug === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Icon name="smartphone" size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Flagship & <span className="section-title-gradient">Deployed Applications</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of 20+ mobile applications spanning enterprise fitness, on-demand logistics, telemedicine, and open-source packages.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((c) => (
            <button
              key={c.value}
              className={`filter-btn ${activeFilter === c.value ? "active" : ""}`}
              onClick={() => setActiveFilter(c.value)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-banner"
                style={{ background: project.gradient }}
              >
                <span className="project-category-tag">{project.category}</span>
                <div className="project-stats-pill">
                  <Icon name="star" size={16} />
                  <span>{project.statsBadge}</span>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>

                {project.bulletPoints && (
                  <ul className="project-bullets">
                    {project.bulletPoints.map((bp, i) => (
                      <li key={i} className="project-bullet">
                        <Icon name="check-circle" size={14} />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.googlePlayUrl && (
                    <a
                      href={project.googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Icon name="playstore" size={14} />
                      <span>Google Play</span>
                    </a>
                  )}

                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <Icon name="appstore" size={14} />
                      <span>App Store</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <Icon name="github" size={14} />
                      <span>View Repo / pub.dev</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
