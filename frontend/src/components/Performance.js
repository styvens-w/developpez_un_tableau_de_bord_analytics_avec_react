import { getPerformance } from "../utils/services/app.service";
import FormatChartData from "../utils/services/formatChartData";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function Performance() {
  const data = getPerformance();
  const chartDataFormatter = new FormatChartData();

  const formattedData = chartDataFormatter.setRadarFormattedData(data);

  return (
    <div className="performance">
      <ResponsiveContainer>
        <RadarChart
          innerRadius={15}
          outerRadius={90}
          data={formattedData.reverse()}
        >
          <PolarGrid stroke={"white"} gridType="polygon" radialLines={false} />
          <PolarRadiusAxis domain={[0, 240]} axisLine={false} tick={false} />
          <PolarAngleAxis
            tick={{
              fill: "white",
              fontSize: "12px",
              fontWeight: 500,
            }}
            dy={3.5}
            dataKey="subject"
          />
          <Radar dataKey="grade" fill="#FF0101" fillOpacity={0.7} />
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            content={<RadarCustomTooltip payload={formattedData} />}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;

function RadarCustomTooltip(active) {
  let gradeData;

  for (let payloadValue of active.payload) {
    gradeData = payloadValue.payload.grade;
  }
  return (
    <div className="tool-tip__radar-chart">
      <p className="tool-tip__radar-chart-text">{gradeData}</p>
    </div>
  );
}
