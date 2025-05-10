import styled from "styled-components";
import Card from "../common/Card";

import { useTranslation } from "react-i18next";
import { ApiStats } from "../../types/api";

interface StatsSummaryProps {
  stats: ApiStats;
}

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const StatsSummary = ({ stats }: StatsSummaryProps) => {
  const { t } = useTranslation();
  const last7DayRequests = stats.requestsPerDay
    .slice(-7)
    .reduce((sum, day) => sum + day.count, 0);

  const topLanguage =
    stats.languageDistribution.length > 0
      ? stats.languageDistribution.sort((a, b) => b.count - a.count)[0].language
      : "N/A";

  const topSentiment =
    stats.sentimentDistribution.length > 0
      ? stats.sentimentDistribution.sort((a, b) => b.count - a.count)[0]
          .sentiment
      : "N/A";

  return (
    <Card title={t("dashboard.statsSummary.title")}>
      <StatsGrid>
        <StatItem>
          <StatValue>{stats.totalRequests}</StatValue>
          <StatLabel>{t("dashboard.statsSummary.totalRequests")}</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{last7DayRequests}</StatValue>
          <StatLabel>{t("dashboard.statsSummary.last7Days")}</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{stats.averageTextLength.toFixed(0)}</StatValue>
          <StatLabel>{t("dashboard.statsSummary.avgTextLength")}</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{topLanguage}</StatValue>
          <StatLabel>{t("dashboard.statsSummary.topLanguage")}</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{topSentiment}</StatValue>
          <StatLabel>{t("dashboard.statsSummary.topSentiment")}</StatLabel>
        </StatItem>
      </StatsGrid>
    </Card>
  );
};

export default StatsSummary;
