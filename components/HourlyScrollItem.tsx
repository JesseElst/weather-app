import Colors from "@/constants/Colors";
import type { Hourly } from "@/types";
import { StyleSheet, Text, View } from "react-native";

type HourlyScrollItem = {
  data: Hourly;
};

export const HourlyScrollItem = (props: HourlyScrollItem) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text>{`Hour: ${data.time}:00`}</Text>
      <Text>{`Temp: ${data.temp}°`}</Text>
      <Text>{`Condition: ${data.condition}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    width: 200,
    height: 100,
  },
});
