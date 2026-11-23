import React from "react";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../data/portfolioData";

export const Metrics = () => {
  const { t } = useTranslation();
  const { metrics } = portfolioData;

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{t(m.translationKey, { defaultValue: m.label })}</div>
              <div className="metric-detail">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
