import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { trackWhatsAppClick } from "../utils/analytics";

export const WhatsAppFloat = () => {
  const { t } = useTranslation();
  const { personal } = portfolioData;
  const whatsappUrl = new URL(personal.whatsappUrl);
  whatsappUrl.searchParams.set("text", t("common.whatsappMessage"));

  return (
    <a
      href={whatsappUrl.toString()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label={t("contact.info.title")}
      title={t("contact.info.title")}
      onClick={trackWhatsAppClick}
      data-analytics-event="true"
    >
      <Icon name="whatsapp" size={30} />
    </a>
  );
};
