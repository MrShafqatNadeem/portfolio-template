import React from "react";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export const WhatsAppFloat = () => {
  const { personal } = portfolioData;

  return (
    <a
      href={personal.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat directly on WhatsApp"
    >
      <Icon name="whatsapp" size={30} />
    </a>
  );
};
