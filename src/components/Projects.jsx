import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { trackProjectClick } from "../utils/analytics";

export const Projects = () => {
  const { t } = useTranslation();
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { label: t("works.allProjects"), value: "all" },
    { label: t("works.categories.fitness"), value: "fitness" },
    { label: t("works.categories.onDemand"), value: "ondemand" },
    { label: t("works.categories.utilities"), value: "utility" },
    { label: t("works.categories.healthcare"), value: "healthcare" },
    { label: t("works.categories.openSource"), value: "opensource" },
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
            <span>{t("works.moreTitle")}</span>
          </div>
          <h2 className="section-title">
            <span className="section-title-gradient">{t("works.title")}</span>
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
                      onClick={() => trackProjectClick(project.title, "Google Play", project.googlePlayUrl)}
                      data-analytics-event="true"
                    >
                      <Icon name="playstore" size={14} />
                      <span>{t("works.viewOn.android")}</span>
                    </a>
                  )}

                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      onClick={() => trackProjectClick(project.title, "App Store", project.appStoreUrl)}
                      data-analytics-event="true"
                    >
                      <Icon name="appstore" size={14} />
                      <span>{t("works.viewOn.ios")}</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      onClick={() => trackProjectClick(project.title, "GitHub", project.githubUrl)}
                      data-analytics-event="true"
                    >
                      <Icon name="github" size={14} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.pubUrl && (
                    <a
                      href={project.pubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      onClick={() => trackProjectClick(project.title, "pub.dev", project.pubUrl)}
                      data-analytics-event="true"
                    >
                      <Icon name="external-link" size={14} />
                      <span>pub.dev</span>
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
