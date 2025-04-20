import { franc } from "franc";
import countries from "i18n-iso-countries";
import { LanguageCode } from "@aws-sdk/client-comprehend";

const supportedLanguages: Record<string, string> = {
  "zh-tw": "zh-TW",
  "zh-cn": "zh-CN",
  en: "en",
  ja: "ja",
  ko: "ko",
  fr: "fr",
  de: "de",
  es: "es",
  it: "it",
  pt: "pt",
};

const awsComprehendLanguages = [
  "en",
  "es",
  "fr",
  "de",
  "it",
  "pt",
  "ar",
  "hi",
  "ja",
  "ko",
  "zh-TW", // Traditional Chinese
  "zh-CN", // Simplified Chinese (AWS Comprehend uses zh-CN for Simplified Chinese)
];

export const detectLanguage = (text: string): LanguageCode => {
  try {
    const detectedLanguage = franc(text);
    if (!detectedLanguage || detectedLanguage.length === 0) {
      return "zh-TW";
    }

    const mainLanguage = detectedLanguage.toLowerCase();

    const languageCode = supportedLanguages[mainLanguage] || "zh-TW";

    if (awsComprehendLanguages.includes(languageCode)) {
      return languageCode as LanguageCode;
    }

    return "zh-TW";
  } catch (error) {
    console.error("Error detecting language:", error);
    return "zh-TW"; // Default to Traditional Chinese on error
  }
};

export const getSupportedLanguages = (): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const langCode of awsComprehendLanguages) {
    let name = "";

    if (langCode === "zh-TW") {
      name = "繁體中文";
    } else if (langCode === "zh-CN") {
      name = "簡體中文";
    } else {
      try {
        const alpha2Code = langCode.split("-")[0];
        name = countries.getName(alpha2Code, "zh-TW") || langCode;
      } catch (error) {
        name = langCode;
      }
    }

    result[langCode] = name;
  }
  return result;
};
