import Colors from "@/constants/Colors";
import type { HourlyData } from "@/types";
import { View } from "react-native";
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory-native";

type WindChartProps = {
  data: HourlyData[];
};

export const WindChart = (props: WindChartProps) => {
  const { data } = props;
  return (
    <VictoryChart width={400} theme={VictoryTheme.material} domainPadding={20}>
      <VictoryArea
        data={data.map((item) => ({ x: item.time, y: item.wind }))}
        style={{
          data: { fill: Colors.primary },
        }}
      />
      <VictoryAxis tickFormat={(item) => `${item}:00`} />
      <VictoryAxis
        tickFormat={(item) => `${item}km/h`}
        dependentAxis
        style={{ tickLabels: { padding: 0 } }}
      />
    </VictoryChart>
  );
};
