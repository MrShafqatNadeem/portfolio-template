import React, { useState } from "react";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export const Skills = () => {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const currentCategory =
    skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Icon name="cpu" size={14} />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="section-title-gradient">Architecture Stack</span>
          </h2>
          <p className="section-subtitle">
            Engineered with deep specialization in Flutter cross-platform architecture, high-scale cloud integrations, and modern AI-augmented workflows.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="skills-tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <Icon name={cat.icon} size={16} />
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Current Category Skills */}
        <div className="skills-grid">
          {currentCategory.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-name">
                <Icon
                  name={
                    skill.name.toLowerCase().includes("flutter")
                      ? "flutter"
                      : skill.name.toLowerCase().includes("dart")
                      ? "dart"
                      : skill.highlight
                      ? "zap"
                      : "check-circle"
                  }
                  size={18}
                />
                <span>{skill.name}</span>
              </div>
              <span className="skill-level-badge">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
