import { useEffect, useState } from "react";

import styled from "styled-components";

import { api } from "../api/client";
import { ApiStats } from "../types/api";

import Layout from "../components/common/Layout";
import StatsSummary from "../components/dashboard/StatsSummary";
import UsageChart from "../components/dashboard/UsageChart";
import LanguageChart from "../components/dashboard/LanguageChart";
import SentimentChart from "../components/dashboard/SentimentChart";
import LoadingSpinner from "../components/common/LoadingSpinner";

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

const StatsPage = () => {
  const [stats, setStats] = useState<ApiStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <Layout>
      <StatsContainer>
        <h1>API Usage Statistics</h1>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div>{error}</div>
        ) : stats ? (
          <>
            <StatsSummary stats={stats} />
            <ChartsGrid>
              <UsageChart stats={stats} />
              <LanguageChart stats={stats} />
              <SentimentChart stats={stats} />
            </ChartsGrid>
          </>
        ) : (
          <div>No statistics data available</div>
        )}
      </StatsContainer>
    </Layout>
  );
};

export default StatsPage;
