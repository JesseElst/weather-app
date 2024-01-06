import Sizes from "@/constants/Sizes";
import { WEATHER_ICONS } from "@/data";
import type { DaysData } from "@/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";

type ListItemProps = {
  data: DaysData;
};

export const ListItem = (props: ListItemProps) => {
  const { data } = props;
  const code = data.code as keyof typeof WEATHER_ICONS;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.day}</Text>
      <View style={styles.section}>
        <MaterialCommunityIcons
          name={WEATHER_ICONS[code] || "weather-cloudy"}
          size={Sizes.icon}
        />
        <Text>{`${data.maxTemp} / ${data.minTemp}°C`}</Text>
      </View>
      <Text>{data.condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    width: 80,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    width: 110,
    gap: 5,
  },
});
