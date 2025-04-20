import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  analyzeSentiment,
  extractKeyPhrases,
  detectEntities,
} from "../services/comprehendService";
import { updateStats, getStats } from "../services/statsService";
import {
  detectLanguage,
  getSupportedLanguages,
} from "../services/languageService";
import {
  AnalysisRequest,
  SentimentResult,
  KeyPhraseResult,
  EntitiesResult,
  AnalysisResult,
} from "../models/types";
import logger from "../utils/loggers";
import { LanguageCode } from "@aws-sdk/client-comprehend";
import {
  formatSentimentForUI,
  formatKeyPhrasesForUI,
  formatEntitiesForUI,
} from "../utils/responseFormatter";

export const analyzeText = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    let { text, languageCode } = req.body as AnalysisRequest;
    if (!text || text.trim() === "") {
      return res.status(400).json({
        success: false,
        error: {
          code: "INVALID_INPUT",
          message: "Text is required",
        },
        requestId: req.id,
      });
    }

    if (!languageCode) {
      languageCode = detectLanguage(text) as LanguageCode;
      logger.info(`[${req.id}] Detected language: ${languageCode}`);
    }

    logger.info(`[${req.id}] Analyzing... :${languageCode}`);

    const [sentimentResponse, keyPhraseResponse, entitiesResponse] =
      await Promise.all([
        analyzeSentiment(text, languageCode),
        extractKeyPhrases(text, languageCode),
        detectEntities(text, languageCode),
      ]);

    const sentimentResult: SentimentResult = {
      sentiment: sentimentResponse.Sentiment || "NEUTRAL",
      sentimentScores: {
        positive: sentimentResponse.SentimentScore?.Positive || 0,
        negative: sentimentResponse.SentimentScore?.Negative || 0,
        neutral: sentimentResponse.SentimentScore?.Neutral || 0,
        mixed: sentimentResponse.SentimentScore?.Mixed || 0,
      },
      languageCode,
    };

    const keyPhraseResult: KeyPhraseResult = {
      keyPhrases: (keyPhraseResponse.KeyPhrases || []).map((kp) => ({
        text: kp.Text || "",
        score: kp.Score || 0,
      })),
      languageCode,
    };

    const entitiesResut: EntitiesResult = {
      entities: (entitiesResponse.Entities || []).map((entity) => ({
        text: entity.Text || "",
        type: entity.Type || "",
        score: entity.Score || 0,
      })),
      languageCode,
    };

    const result: AnalysisResult = {
      sentiment: sentimentResult,
      keyPhrases: keyPhraseResult,
      entities: entitiesResut,
      originalText: text,
      timestamp: new Date(),
      requestId: req.id || uuidv4(),
    };

    const formattedResult = {
      sentimentAnalysis: formatSentimentForUI(sentimentResult),
      keyPhrases: formatKeyPhrasesForUI(keyPhraseResult),
      entities: formatEntitiesForUI(entitiesResut),
      originalText: text,
      timestamp: new Date(),
      requestId: req.id || uuidv4(),
    };

    updateStats(text, languageCode, sentimentResult.sentiment);

    logger.info(
      `[${req.id}] Analysis completed, sentiment: ${sentimentResult.sentiment}`
    );

    res.status(200).json({
      success: true,
      data: formattedResult,
      rawData: result,
      requestId: req.id,
    });
  } catch (error) {
    next(error);
  }
};

export const getSupportedLanguagesList = (req: Request, res: Response) => {
  try {
    const languages = getSupportedLanguages();
    res.status(200).json({
      success: true,
      data: languages,
      requestId: req.id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "An error occurred while fetching supported languages",
      },
      requestId: req.id,
    });
  }
};

export const getApistats = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({
      success: true,
      data: getStats(),
      requestId: req.id,
    });
  } catch (error) {
    next(error);
  }
};
