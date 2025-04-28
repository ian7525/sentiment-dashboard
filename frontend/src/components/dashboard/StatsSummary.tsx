import styled from "styled-components";
import Card from "../common/Card";
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
  console.log("stats=", stats);
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
    <Card title="Statistics Summary">
      <StatsGrid>
        <StatItem>
          <StatValue>{stats.totalRequests}</StatValue>
          <StatLabel>Total Requests</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{last7DayRequests}</StatValue>
          <StatLabel>Last 7 Days</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{stats.averageTextLength.toFixed(0)}</StatValue>
          <StatLabel>Avg Text Length</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{topLanguage}</StatValue>
          <StatLabel>Top Language</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{topSentiment}</StatValue>
          <StatLabel>Top Sentiment</StatLabel>
        </StatItem>
      </StatsGrid>
    </Card>
  );
};

export default StatsSummary;
