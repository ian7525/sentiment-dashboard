import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";
import Card from "../common/Card";
import { ApiStats } from "../../types/api";

interface SentimentChartProps {
  stats: ApiStats;
}

const ChartContainer = styled.div`
  height: 300px;
  width: 100%;
`;

const sentimentNameMap: Record<string, string> = {
  POSITIVE: "Positive",
  NEGATIVE: "Negative",
  NEUTRAL: "Neutral",
  MIXED: "Mixed",
};

const sentimentColorMap: Record<string, string> = {
  POSITIVE: "#4CAF50",
  NEGATIVE: "#F44336",
  NEUTRAL: "#9E9E9E",
  MIXED: "#FF9800",
};

const SentimentChart = ({ stats }: SentimentChartProps) => {
  const formattedData = stats.sentimentDistribution
    .map((item) => ({
      name: sentimentNameMap[item.sentiment] || item.sentiment,
      value: item.count,
      sentiment: item.sentiment,
    }))
    .sort((a, b) => b.value - a.value);

  return (
    <Card title="Sentiment Distribution">
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value} requests`, "Count"]} />
            <Legend />
            <Bar dataKey="value" name="Count">
              {formattedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={sentimentColorMap[entry.sentiment] || "#8884d8"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};

export default SentimentChart;
