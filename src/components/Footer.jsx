import React from "react";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} <strong>{personal.name}</strong> • Senior Flutter Software Engineer • All rights reserved.
        </p>
      </div>
    </footer>
  );
};
