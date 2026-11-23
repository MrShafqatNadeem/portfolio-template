import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import LanguageSwitcher from "./layouts/LanguageSwitcher";
import { trackResumeDownload } from "../utils/analytics";

export const Navbar = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { personal } = portfolioData;

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.works"), href: "#projects" },
    { name: t("about.experience.title"), href: "#experience" },
    { name: t("hire.services.title"), href: "#services" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">
            <Icon name="flutter" size={20} />
          </div>
          <span>{personal.name}</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            className="btn-icon"
            aria-label="Toggle Theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            data-analytics-event="true"
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>

          <a
            href={personal.resumeUrl}
            download={personal.resumeFilename}
            className="btn btn-primary btn-sm resume-nav-link"
            onClick={() => trackResumeDownload(personal.resumeFilename)}
            data-analytics-event="true"
          >
            <Icon name="download" size={15} />
            <span>{t("contact.info.downloadResume")}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            download={personal.resumeFilename}
            className="nav-link mobile-resume-link"
            onClick={() => trackResumeDownload(personal.resumeFilename)}
            data-analytics-event="true"
          >
            {t("contact.info.downloadResume")}
          </a>
        </div>
      )}
    </nav>
  );
};
