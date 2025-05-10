import styled from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Card from "../common/Card";
import { useTranslation } from "react-i18next";
import { ApiStats } from "../../types/api";

interface LanguageChartProps {
  stats: ApiStats;
}

const ChartContainer = styled.div`
  height: 300px;
  width: 100%;
`;

const languageNameMap: Record<string, string> = {
  en: "English",
  "zh-TW": "Traditional Chinese",
  "zh-CN": "Simplified Chinese",
  ja: "Japanese",
  ko: "Korean",
  fr: "French",
  de: "German",
  es: "Spanish",
  it: "Italian",
  pt: "Portuguese",
};
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
  "#FFC658",
  "#FF6B6B",
  "#4D4D4D",
  "#B3B3B3",
];

const LanguageChart = ({ stats }: LanguageChartProps) => {
  const { t } = useTranslation();
  const formattedData = stats.languageDistribution
    .map((item) => ({
      name: languageNameMap[item.language] || item.language,
      value: item.count,
    }))
    .sort((a, b) => b.value - a.value);

  return (
    <Card title={t("dashboard.languageChart.title")}>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={formattedData}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {formattedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value} requests`, "Count"]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};

export default LanguageChart;
