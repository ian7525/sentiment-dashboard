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

dotenv.config();

const comprehendClient = new ComprehendClient({
  region: process.env.AWS_REGION || "es-west-1",
});

export const analyzeSentiment = async (
  text: string,
  languageCode: LanguageCode = "zh-TW"
) => {
  try {
    const params: DetectSentimentCommandInput = {
      Text: text,
      LanguageCode: languageCode,
    };
    const command = new DetectSentimentCommand(params);
    return await comprehendClient.send(command);
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
    const params: DetectKeyPhrasesCommandInput = {
      Text: text,
      LanguageCode: languageCode,
    };
    const command = new DetectKeyPhrasesCommand(params);
    return await comprehendClient.send(command);
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
    const params: DetectEntitiesCommandInput = {
      Text: text,
      LanguageCode: languageCode,
    };
    const command = new DetectEntitiesCommand(params);
    return await comprehendClient.send(command);
  } catch (error) {
    console.error("Error detecting entities:", error);
    throw error;
  }
};
