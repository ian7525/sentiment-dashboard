import { useEffect, useState } from "react";

import styled from "styled-components";

import { api } from "../api/client";
import { ApiStats } from "../types/api";

import StatsSummary from "../components/dashboard/StatsSummary";
import UsageChart from "../components/dashboard/UsageChart";
import LanguageChart from "../components/dashboard/LanguageChart";
import SentimentChart from "../components/dashboard/SentimentChart";
import LoadingSpinner from "../components/common/LoadingSpinner";
import FilterPanel, { FilterState } from "../components/dashboard/FilterPanel";
import { useTranslation } from "react-i18next";

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
`;

const DEFAULT_LANGUAGES = [
  { value: "en", label: "English" },
  { value: "zh", label: "Chinese" },
  { value: "ja", label: "Japanese" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
];

const DEFAULT_SENTIMENTS = [
  { value: "POSITIVE", label: "Positive" },
  { value: "NEGATIVE", label: "Negative" },
  { value: "NEUTRAL", label: "Neutral" },
  { value: "MIXED", label: "Mixed" },
];

const filterData = (
  data: ApiStats | null,
  filters: FilterState
): ApiStats | null => {
  if (!data) return null;

  const filteredData: ApiStats = JSON.parse(JSON.stringify(data));

  if (filters.dateRange !== "all") {
    const now = new Date();
    const daysToFilter =
      filters.dateRange === "7days"
        ? 7
        : filters.dateRange === "30days"
        ? 30
        : 90;
    const cutoffDate = new Date(now.setDate(now.getDate() - daysToFilter));

    filteredData.requestsPerDay = filteredData.requestsPerDay.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= cutoffDate;
    });
  }

  if (filters.language !== "all") {
    filteredData.languageDistribution =
      filteredData.languageDistribution.filter(
        (item) => item.language === filters.language
      );
  }

  if (filters.sentiment !== "all") {
    filteredData.sentimentDistribution =
      filteredData.sentimentDistribution.filter(
        (item) => item.sentiment === filters.sentiment
      );
  }

  return filteredData;
};

const StatsPage = () => {
  const [stats, setStats] = useState<ApiStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    dateRange: "30days",
    language: "all",
    sentiment: "all",
  });
  const { t } = useTranslation();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const apiStatsResult = await api.getApiStats();
        console.log("api.getApiStats data=", apiStatsResult);
        setStats(apiStatsResult);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch statustics:", err);
        setError("Unable to load statistics. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const handleFilterChange = (filterName: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const languageOptions = stats?.languageDistribution
    ? Array.from(
        new Set(stats.languageDistribution.map((item) => item.language))
      ).map((lang) => {
        const defaultLang = DEFAULT_LANGUAGES.find((l) => l.value === lang);
        return { value: lang, label: defaultLang?.label || lang };
      })
    : DEFAULT_LANGUAGES;

  const filteredData = filterData(stats, filters);

  return (
    <StatsContainer>
      <h1>{t("stats.title")}</h1>

      {!loading && stats && (
        <FilterPanel
          filters={filters}
          onFilterChange={handleFilterChange}
          languages={languageOptions}
          sentiments={DEFAULT_SENTIMENTS}
        />
      )}

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div>{t("common.error", { error })}</div>
      ) : filteredData ? (
        <>
          <StatsSummary stats={filteredData} />
          <ChartsGrid>
            <UsageChart stats={filteredData} />
            <LanguageChart stats={filteredData} />
            <SentimentChart stats={filteredData} />
          </ChartsGrid>
        </>
      ) : (
        <div>{t("stats.noData")}</div>
      )}
    </StatsContainer>
  );
};

export default StatsPage;
