import { LanguageCode } from "@aws-sdk/client-comprehend";

export interface AnalysisRequest {
  text: string;
  languageCode: LanguageCode;
}

export interface SentimentResult {
  sentiment: string;
  sentimentScores: {
    positive: number;
    negative: number;
    neutral: number;
    mixed: number;
  };
  languageCode: LanguageCode;
}

export interface KeyPhraseResult {
  keyPhrases: Array<{
    text: string;
    score: number;
  }>;
  languageCode: LanguageCode;
}

export interface EntitiesResult {
  entities: Array<{
    text: string;
    type: string;
    score: number;
  }>;
  languageCode: LanguageCode;
}

export interface AnalysisResult {
  sentiment: SentimentResult;
  keyPhrases: KeyPhraseResult;
  entities: EntitiesResult;
  originalText: string;
  timestamp: Date;
  requestId: string;
}

export interface ApiUsageStats {
  totalRequests: number;
  requestsPerDay: { date: string; count: number }[];
  averageTextLength: number;
  languageDistribution: { language: string; count: number }[];
  sentimentDistribution: { sentiment: string; count: number }[];
}
