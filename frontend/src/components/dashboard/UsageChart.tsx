import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Card from "../common/Card";
import { ApiStats } from "../../types/api";

interface UsageChartProps {
  stats: ApiStats;
}

const ChartContainer = styled.div`
  height: 300px;
  width: 100%;
`;

const UsageChart = ({ stats }: UsageChartProps) => {
  const formattedData = stats.requestsPerDay.map((day) => ({
    date: new Date(day.date).toLocaleDateString(),
    requests: day.count,
  }));

  return (
    <Card title="API Usage Trends">
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="requests"
              name="Requests"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
};

export default UsageChart;
