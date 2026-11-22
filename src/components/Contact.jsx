import React, { useState } from "react";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export const Contact = () => {
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
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Icon name="mail" size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="section-title-gradient">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Currently available for remote full-time engineering and contract mobile consulting roles. Reach out directly or send a message below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "24px" }}>
              Direct Channels
            </h3>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Icon name="mail" size={20} />
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <a href={`mailto:${personal.email}`} className="contact-item-value">
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Icon name="phone" size={20} />
              </div>
              <div>
                <div className="contact-item-label">Phone / WhatsApp</div>
                <a href={`tel:${personal.phone}`} className="contact-item-value">
                  {personal.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Icon name="map-pin" size={20} />
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <span className="contact-item-value">{personal.location}</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <Icon name="globe" size={20} />
              </div>
              <div>
                <div className="contact-item-label">Timezone Overlap</div>
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
              >
                <Icon name="github" size={20} />
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="LinkedIn"
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
              >
                <Icon name="whatsapp" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <form onSubmit={handleMailSubmit} className="contact-form">
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px" }}>
              Send an Inquiry
            </h3>

            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject / Project Role</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Senior Flutter Role / MVP Development"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Shafqat, we're looking for an experienced Flutter engineer to lead..."
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              <Icon name="mail" size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
