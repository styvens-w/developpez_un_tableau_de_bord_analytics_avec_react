import { getScore } from "../utils/services/app.service";
import FormatChartData from "../utils/services/formatChartData";
import { Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

function Score() {
  const data = getScore();
  const chartDataFormatter = new FormatChartData();

  const formattedData = chartDataFormatter.setGaugeFormattedData(data);

  return (
    <div className="score">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={formattedData}
            dataKey="value"
            outerRadius={74.5}
            fill={"#ffffff"}
            stroke={"none"}
          />
          <Pie
            data={formattedData}
            dataKey="value"
            startAngle={90}
            endAngle={90 + (formattedData[0].value * 360) / 100}
            innerRadius={74}
            outerRadius={85}
            fill={"#ff0000"}
            cornerRadius={100}
            stroke={"none"}
            nameKey={"Score"}
          />
          <Legend
            content={<PieCustomLegend score={formattedData[0].value} />}
            wrapperStyle={{ top: 0 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;

function PieCustomLegend(props) {
  return (
    <div className="score__legend">
      <p className="score__legend__title">Score</p>
      <div className="score__legend__objective">
        <p>{props.score}%</p>
        <p>de votre objectif</p>
      </div>
    </div>
  );
}
