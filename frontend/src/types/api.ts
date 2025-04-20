export interface AnalysisRequest {
  text: string;
  language?: string;
}

export interface SentimentScoreItem {
  name: string;
  value: number;
  color: string;
}

export interface SentimentAnalysis {
  sentiment: "POSITIVE" | "NEGATIVE" | "NEUTRAL" | "MIXED";
  sentimentLabel: string;
  scores: SentimentScoreItem[];
  languageCode: string;
}

export interface KeyPhrase {
  text: string;
  score: number;
}

export interface KeyPhrases {
  phrases: KeyPhrase[];
  languageCode: string;
}

export interface Entity {
  text: string;
  type: string;
  typeLabel?: string;
  score: number;
}

export interface Entities {
  entities: Entity[];
  groupedEntities: Record<string, Entity[]>;
  languageCode: string;
}

export interface AnalysisData {
  sentimentAnalysis: SentimentAnalysis;
  keyPhrases: KeyPhrases;
  entities: Entities;
  originalText: string;
  timestamp: string;
  requestId: string;
}

export interface AnalysisResult {
  success: boolean;
  data: AnalysisData;
  rawData?: any;
  requestId: string;
}

export interface ApiStats {
  totalRequests: number;
  requestsPerDay: { date: string; count: number }[];
  averageTextLength: number;
  languageDistribution: { language: string; count: number }[];
  sentimentDistribution: { sentiment: string; count: number }[];
}

export interface SupportedLanguage {
  code: string;
  name: string;
}
