import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import resources from "./locales";

const supportedLngs = ["ru", "uz", "en", "tj"];
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "tj",
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
