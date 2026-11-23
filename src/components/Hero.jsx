import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { trackResumeDownload } from "../utils/analytics";

export const Hero = () => {
  const { t } = useTranslation();
  const { personal } = portfolioData;

  const quickHighlights = [
    { text: "Flutter & Dart Specialist", icon: "flutter" },
    { text: "60 FPS Zero-Jank Architect", icon: "zap" },
    { text: "60% APK Reduction via AWS CDN", icon: "cloud" },
    { text: "pub.dev Package Creator", icon: "award" },
    { text: "AI-Augmented Velocity", icon: "sparkles" },
  ];

  return (
    <section className="hero" id="about">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>{personal.availabilityStatus}</span>
          </div>

          <h1 className="hero-title">
            {t("header.greeting")} <span className="section-title-gradient">{personal.name}</span>
          </h1>

          <div className="hero-role">
            <span>{personal.role}</span>
            <span style={{ color: "var(--text-muted)" }}>•</span>
            <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>{personal.experienceYears} Years Exp</span>
          </div>

          <p className="hero-desc">{personal.summary}</p>

          <div className="hero-highlights-tags">
            {quickHighlights.map((h, i) => (
              <span key={i} className="hero-tag">
                <Icon name={h.icon} size={14} />
                <span>{h.text}</span>
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a
              href={personal.resumeUrl}
              download={personal.resumeFilename}
              className="btn btn-primary"
              onClick={() => trackResumeDownload(personal.resumeFilename)}
              data-analytics-event="true"
            >
              <Icon name="download" size={18} />
              <span>{t("contact.info.downloadResume")}</span>
            </a>

            <a href="#projects" className="btn btn-secondary">
              <span>{t("nav.works")}</span>
              <Icon name="arrow-up-right" size={16} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Icon name="mail" size={16} />
              <span>{t("nav.contact")}</span>
            </a>
          </div>
        </div>

        {/* Visual Avatar */}
        <div className="hero-visual">
          <div className="avatar-wrapper">
            <img
              src={personal.avatar}
              alt={personal.name}
              className="avatar-img"
              loading="eager"
            />
          </div>

          <div className="hero-floating-card">
            <div className="hero-floating-icon">
              <Icon name="award" size={22} />
            </div>
            <div>
              <div className="hero-floating-label">Track Record</div>
              <div className="hero-floating-value">100K+ Top App Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
