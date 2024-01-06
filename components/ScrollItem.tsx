import Colors from "@/constants/Colors";
import type { HourlyData } from "@/types";
import { StyleSheet, Text, View } from "react-native";

type ScrollItem = {
  data: HourlyData;
};

export const ScrollItem = (props: ScrollItem) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>{`${data.time}:00`}</Text>
      <Text style={styles.temp}>{`${data.temp}°C`}</Text>
      <Text style={styles.smallText}>{data.condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGreen,
    borderRadius: 10,
    marginEnd: 20,
    width: 150,
    justifyContent: "space-between",
    height: 100,
    padding: 10,
  },
  temp: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.white,
  },
  smallText: {
    color: Colors.gray,
  },
});
