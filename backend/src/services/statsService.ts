import { LanguageCode } from "@aws-sdk/client-comprehend";
import { ApiUsageStats } from "../models/types";

const stats: ApiUsageStats = {
  totalRequests: 0,
  requestsPerDay: [],
  averageTextLength: 0,
  languageDistribution: [],
  sentimentDistribution: [],
};

let totalTextLength: number = 0;
const languageCounts: Record<string, number> = {};
const requestByDay: Record<string, number> = {};
const sentimentCounts: Record<string, number> = {
  POSITIVE: 0,
  NEGATIVE: 0,
  NEUTRAL: 0,
  MIXED: 0,
};

export const updateStats = (
  text: string,
  languageCode: LanguageCode,
  sentiment: string
) => {
  stats.totalRequests += 1;

  // language
  if (!languageCounts[languageCode]) {
    languageCounts[languageCode] = 0;
  }
  languageCounts[languageCode] += 1;

  stats.languageDistribution = Object.entries(languageCounts).map(
    ([language, count]) => ({ language, count })
  );

  totalTextLength += text.length;
  stats.averageTextLength = Math.round(totalTextLength / stats.totalRequests);

  // sentiment
  if (sentimentCounts[sentiment] !== undefined) {
    sentimentCounts[sentiment] += 1;
  }

  stats.sentimentDistribution = Object.entries(sentimentCounts).map(
    ([sentiment, count]) => ({ sentiment, count })
  );

  const today = new Date().toISOString().split("T")[0];
  if (!requestByDay[today]) {
    requestByDay[today] = 0;
  }
  requestByDay[today] += 1;

  stats.requestsPerDay = Object.entries(requestByDay)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => b.date.localeCompare(a.date));
};

export const getStats = (): ApiUsageStats => ({ ...stats });
