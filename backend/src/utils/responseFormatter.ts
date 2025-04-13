import {
  SentimentResult,
  KeyPhraseResult,
  EntitiesResult,
} from "../models/types";

export const getSentimentLabel = (sentiment: string): string => {
  const labels: Record<string, string> = {
    POSITIVE: "Positive",
    NEGATIVE: "Negative",
    NEUTRAL: "Neutral",
    MIXED: "Mixed",
  };

  return labels[sentiment] || sentiment;
};

export const getEntityTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    PERSON: "Person",
    LOCATION: "Location",
    ORGANIZATION: "Organization",
    COMMERCIAL_ITEM: "Commercial Item",
    EVENT: "Event",
    DATE: "Date",
    QUANTITY: "Quantity",
    TITLE: "Title",
    OTHER: "Other",
  };

  return labels[type] || type;
};

export const formatSentimentForUI = (sentimentResult: SentimentResult) => {
  const sentiment = sentimentResult.sentiment;
  const sentimentScores = sentimentResult.sentimentScores;
  return {
    sentiment,
    sentimentLabel: getSentimentLabel(sentiment),
    scores: [
      { name: "Positive", value: sentimentScores.positive, color: "#4CAF50" },
      { name: "Negative", value: sentimentScores.negative, color: "#F44336" },
      { name: "Neutral", value: sentimentScores.neutral, color: "#9E9E9E" },
      { name: "Mixed", value: sentimentScores.mixed, color: "#FF9800" },
    ],
    languageCode: sentimentResult.languageCode,
  };
};

export const formatKeyPhrasesForUI = (keyPhrases: KeyPhraseResult) => {
  const sortedPhrases = [...keyPhrases.keyPhrases]
    .sort((a, b) => b.score - a.score)
    .map((kp) => ({ text: kp.text, score: Math.round(kp.score * 100) / 100 }));

  return {
    phrases: sortedPhrases,
    languageCode: keyPhrases.languageCode,
  };
};

export const formatEntitiesForUI = (entities: EntitiesResult) => {
  const sortedEntities = [...entities.entities]
    .sort((a, b) => b.score - a.score)
    .map((entity) => ({
      text: entity.text,
      type: entity.type,
      typeLabel: getEntityTypeLabel(entity.type),
      score: Math.round(entity.score * 100) / 100,
    }));

  const groupedByType: Record<string, any[]> = {};
  sortedEntities.forEach((entity) => {
    if (!groupedByType[entity.type]) {
      groupedByType[entity.type] = [];
    }
    groupedByType[entity.type].push(entity);
  });

  return {
    entities: sortedEntities,
    groupEntities: groupedByType,
    languageCode: entities.languageCode,
  };
};
