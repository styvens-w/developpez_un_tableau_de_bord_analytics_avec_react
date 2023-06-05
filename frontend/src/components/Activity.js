import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getActivity } from "../utils/services/app.service";
import FormatChartData from "../utils/services/formatChartData";

function Activity() {
  // On récupère les données des activités
  const data = getActivity();

  // On instancie la classe qui va formater les données pour le graphique
  const chartDataFormatter = new FormatChartData();

  // Puis, on est appel la methode approprié au graphique et qui prend en paramètre les données
  const formattedData = chartDataFormatter.setBarsFormattedData(data);

  return (
    <div className="activity">
      <ResponsiveContainer>
        <BarChart
          data={formattedData}
          margin={{ right: 26, bottom: 23, left: 32 }}
          barSize={7}
          barGap={8}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
            horizontalPoints={[112.5, 182.5]}
          />
          <XAxis
            tick={{ fill: "#9B9EAC", fontSize: "14px", fontWeight: "500" }}
            height={37}
            dataKey="name"
            tickLine={false}
            tickSize={16}
          />
          <YAxis
            tick={{ fill: "#9B9EAC", fontSize: "14px", fontWeight: "500" }}
            yAxisId="right"
            dataKey={"kg"}
            domain={["dataMin - 3", "dataMax + 4"]}
            tickCount={3}
            orientation={"right"}
            tickLine={false}
            axisLine={false}
            tickSize={38}
          />
          <YAxis
            dataKey={"kCal"}
            domain={[0, "dataMax + 10"]}
            yAxisId="left"
            orientation={"left"}
            tickLine={false}
            axisLine={false}
            hide={true}
          />
          <Tooltip
            content={<BarsCustomTooltip />}
            position={{ y: 65 }}
            wrapperStyle={{ outline: "none" }}
          />
          <Legend
            verticalAlign={"top"}
            content={<BarsCustomLegend payload={formattedData} />}
          />
          <Bar
            yAxisId="right"
            radius={[4, 4, 0, 0]}
            dataKey="kg"
            fill="#282D30"
          />
          <Bar
            yAxisId="left"
            radius={[4, 4, 0, 0]}
            dataKey="kCal"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activity;

// Customisation pour le tooltip
function BarsCustomTooltip(active) {
  let kilogramData;
  let caloriesData;

  for (let payloadValue of active.payload) {
    kilogramData = payloadValue.payload.kg;
    caloriesData = payloadValue.payload.kCal;
  }

  const payloadIsEmpty = !active.payload.length;

  if (payloadIsEmpty) {
    return null;
  }

  return (
    <div className="tool-tip__bar-chart">
      <p className="tool-tip__bar-chart-text"> {`${kilogramData}kg`}</p>
      <p className="tool-tip__bar-chart-text"> {`${caloriesData}Kcal`}</p>
    </div>
  );
}

// Customisation pour la legend
function BarsCustomLegend(props) {
  const { payload } = props;
  const AddName = ["Poids", "Calories brûlées"];
  return (
    <div className="activity__legend">
      <p className="activity__legend__title">Activité quotidienne</p>

      <ul className="activity__legend__list">
        {payload.map((entry, index) => (
          <li
            key={index}
            className={`activity__legend__list__item --${entry.value}`}
          >
            {`${AddName[index]} (${entry.value})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
