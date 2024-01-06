import type { Hourly } from "@/types";
import { View } from "react-native";
import {
  VictoryAxis,
  VictoryChart,
  VictoryBar,
  VictoryTheme,
} from "victory-native";

type RainChartProps = {
  data: Hourly[];
};

export const RainChart = (props: RainChartProps) => {
  const { data } = props;
  return (
    <View>
      <VictoryChart
        width={400}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryBar data={data} x="date" y="rain" />
        <VictoryAxis tickFormat={(item) => `${item}:00`} />
        <VictoryAxis tickFormat={(item) => `${item}mm`} dependentAxis />
      </VictoryChart>
    </View>
  );
};
