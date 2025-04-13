import {
  ComprehendClient,
  DetectSentimentCommand,
  DetectKeyPhrasesCommand,
  DetectEntitiesCommand,
  DetectSentimentCommandInput,
  DetectKeyPhrasesCommandInput,
  DetectEntitiesCommandInput,
  LanguageCode,
} from "@aws-sdk/client-comprehend";
import dotenv from "dotenv";
import { detectLanguage } from "./languageService";

dotenv.config();

const comprehendClient = new ComprehendClient({
  region: process.env.AWS_REGION || "es-west-1",
});

const supportedLanguages = [
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
  "zh-CN",
  "zh-TW",
];

const ensureSupportedLanguage = (languageCode: LanguageCode): LanguageCode => {
  return supportedLanguages.includes(languageCode) ? languageCode : "zh-TW";
};

export const analyzeSentiment = async (
  text: string,
  languageCode: LanguageCode = "zh-TW"
) => {
  try {
    const finalLanguageCode = ensureSupportedLanguage(
      languageCode || detectLanguage(text)
    );

    const params: DetectSentimentCommandInput = {
      Text: text,
      LanguageCode: finalLanguageCode,
    };
    const command = new DetectSentimentCommand(params);
    const response = await comprehendClient.send(command);
    return {
      ...response,
      LanguageCode: finalLanguageCode,
    };
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    throw error;
  }
};

export const extractKeyPhrases = async (
  text: string,
  languageCode: LanguageCode = "zh-TW"
) => {
  try {
    const finalLanguageCode = ensureSupportedLanguage(
      languageCode || detectLanguage(text)
    );

    const params: DetectKeyPhrasesCommandInput = {
      Text: text,
      LanguageCode: finalLanguageCode,
    };
    const command = new DetectKeyPhrasesCommand(params);
    const response = await comprehendClient.send(command);
    return {
      ...response,
      LanguageCode: finalLanguageCode,
    };
  } catch (error) {
    console.error("Error extracting key phrases:", error);
    throw error;
  }
};

export const detectEntities = async (
  text: string,
  languageCode: LanguageCode = "zh-TW"
) => {
  try {
    const finalLanguageCode = ensureSupportedLanguage(
      languageCode || detectLanguage(text)
    );

    const params: DetectEntitiesCommandInput = {
      Text: text,
      LanguageCode: finalLanguageCode,
    };
    const command = new DetectEntitiesCommand(params);
    const response = await comprehendClient.send(command);
    return {
      ...response,
      LanguageCode: finalLanguageCode,
    };
  } catch (error) {
    console.error("Error detecting entities:", error);
    throw error;
  }
};
