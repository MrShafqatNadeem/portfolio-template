import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import {
  trackContactMethodClick,
  trackContactSubmit,
  trackSocialClick,
} from "../utils/analytics";

export const Contact = () => {
  const { t } = useTranslation();
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    let hasOpenedMailClient = false;
    const openMailClient = () => {
      if (hasOpenedMailClient) return;
      hasOpenedMailClient = true;
      window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    };

    trackContactSubmit(openMailClient);
    window.setTimeout(openMailClient, 300);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Icon name="mail" size={14} />
            <span>{t("nav.contact")}</span>
          </div>
          <h2 className="section-title">
            <span className="section-title-gradient">{t("contact.title")}</span>
          </h2>
          <p className="section-subtitle">
            {t("contact.info.description")}
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "24px" }}>
              {t("contact.info.title")}
            </h3>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Icon name="mail" size={20} />
              </div>
              <div>
                <div className="contact-item-label">{t("contact.form.email")}</div>
                <a
                  href={`mailto:${personal.email}`}
                  className="contact-item-value"
                  onClick={() => trackContactMethodClick("email")}
                  data-analytics-event="true"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Icon name="phone" size={20} />
              </div>
              <div>
                <div className="contact-item-label">{t("contact.info.phone")}</div>
                <a
                  href={`tel:${personal.phone}`}
                  className="contact-item-value"
                  onClick={() => trackContactMethodClick("phone")}
                  data-analytics-event="true"
                >
                  {personal.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Icon name="map-pin" size={20} />
              </div>
              <div>
                <div className="contact-item-label">{t("contact.info.location")}</div>
                <span className="contact-item-value">{personal.location}</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Icon name="globe" size={20} />
              </div>
              <div>
                <div className="contact-item-label">{t("contact.info.timezone")}</div>
                <span className="contact-item-value">{personal.timezoneOverlap}</span>
              </div>
            </div>

            <div className="contact-social-row">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="GitHub"
                onClick={() => trackSocialClick("GitHub")}
                data-analytics-event="true"
              >
                <Icon name="github" size={20} />
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="LinkedIn"
                onClick={() => trackSocialClick("LinkedIn")}
                data-analytics-event="true"
              >
                <Icon name="linkedin" size={20} />
              </a>

              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                style={{ color: "#25D366" }}
                title="WhatsApp Direct Message"
                onClick={() => trackSocialClick("WhatsApp")}
                data-analytics-event="true"
              >
                <Icon name="whatsapp" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <form onSubmit={handleMailSubmit} className="contact-form">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>
              {t("contact.info.title")}
            </h3>

            <div className="form-group">
              <label className="form-label" htmlFor="name">{t("contact.form.name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.form.namePlaceholder")}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">{t("contact.form.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.form.emailPlaceholder")}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">{t("contact.form.subject")}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("contact.form.subjectPlaceholder")}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">{t("contact.form.message")}</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.form.messagePlaceholder")}
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }} data-analytics-event="true">
              <Icon name="mail" size={18} />
              <span>{t("contact.form.send")}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
