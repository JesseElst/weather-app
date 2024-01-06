import type { Hourly } from "@/types";
import { View } from "react-native";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory-native";

type TempChartProps = {
  data: Hourly[];
};

export const TempChart = (props: TempChartProps) => {
  const { data } = props;
  return (
    <View>
      <VictoryChart
        width={400}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={data.map((item) => ({ x: item.time, y: item.temp }))}
        />
        <VictoryAxis tickFormat={(item) => `${item}:00`} />
        <VictoryAxis tickFormat={(item) => `${item}°`} dependentAxis />
      </VictoryChart>
    </View>
  );
};
