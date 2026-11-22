import React from "react";
import { portfolioData } from "../data/portfolioData";

export const Metrics = () => {
  const { metrics } = portfolioData;

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-detail">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
