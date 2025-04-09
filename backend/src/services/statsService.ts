import { LanguageCode } from "@aws-sdk/client-comprehend";
import { ApiUsageStats } from "../models/types";

const stats: ApiUsageStats = {
  totalRequests: 0,
  requestsByLanguage: {},
  averageTextLength: 0,
  sentimentDistribution: {
    POSITIVE: 0,
    NEGATIVE: 0,
    NEUTRAL: 0,
    MIXED: 0,
  },
};

let totalTextLength: number = 0;

export const updateStats = (
  text: string,
  languageCode: LanguageCode,
  sentiment: string
) => {
  stats.totalRequests += 1;

  if (!stats.requestsByLanguage[languageCode]) {
    stats.requestsByLanguage[languageCode] = 0;
  }
  stats.requestsByLanguage[languageCode] += 1;

  totalTextLength += text.length;
  stats.averageTextLength = Math.round(totalTextLength / stats.totalRequests);

  if (stats.sentimentDistribution[sentiment]) {
    stats.sentimentDistribution[sentiment] += 1;
  }
};

export const getStats = (): ApiUsageStats => ({ ...stats });
