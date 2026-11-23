import React from "react";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../data/portfolioData";

export const Footer = () => {
  const { t } = useTranslation();
  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} <strong>{personal.name}</strong> • {personal.role} • {t("contact.copyright")}.
        </p>
      </div>
    </footer>
  );
};
