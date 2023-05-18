import { getSessions } from "../utils/services/app.service";
import FormatChartData from "../utils/services/formatChartData";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Sessions() {
  const data = getSessions();
  const chartDataFormatter = new FormatChartData();

  const formattedData = chartDataFormatter.setLineFormattedData(data);

  return (
    <div className="sessions">
      <ResponsiveContainer>
        <LineChart
          data={formattedData}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            type="category"
            tick={{
              fill: "#ffffff",
              opacity: "0.6",
              fontSize: "12px",
              fontWeight: "500",
            }}
            tickSize={1}
            tickLine={false}
            axisLine={false}
            dataKey="name"
            padding={{ right: 16, left: 16 }}
          />
          <YAxis
            dataKey="min"
            domain={["dataMin - 5", "dataMax + 10"]}
            padding={{ top: 20 }}
            hide={true}
          />
          <Legend
            verticalAlign={"top"}
            align={"left"}
            payload={[{ value: "Durée moyenne des sessions" }]}
            wrapperStyle={{
              listStyle: "none",
              color: "#ffffff",
              opacity: "0.6",
              margin: "29px 0 0 34px",
            }}
            margin={{ right: 0 }}
            iconSize={0}
            width={147}
          />
          <Tooltip
            cursor={false}
            wrapperStyle={{ outline: "none" }}
            content={<LineCustomTooltip payload={formattedData} />}
            position={{ y: 0 }}
          />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#FFFFFF90"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#ffffff",
              stroke: "rgba(255,255,255,0.25)",
              strokeWidth: 10,
            }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Sessions;

function LineCustomTooltip(props) {
  let activityData = null;
  const posX = props.coordinate.x;
  let marginLeft = 0;

  if (!props.payload) {
    return null;
  }

  if (posX === 16) {
    marginLeft = 25;
  } else if (posX === 242) {
    marginLeft = -25;
  }

  for (let payloadValue of props?.payload) {
    activityData = payloadValue.payload.min;
  }

  return (
    <div
      style={{ transform: `translate(calc(${posX}px - 18px))` }}
      className="tool-tip__line-chart"
    >
      <p
        style={{ marginLeft: marginLeft }}
        className="tool-tip__line-chart-text"
      >
        {" "}
        {`${activityData} min`}
      </p>
    </div>
  );
}
