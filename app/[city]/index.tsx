import { ErrorMessage } from "@/components/ErrorMessage";
import { HourlyScrollItem } from "@/components/HourlyScrollItem";
import { RainChart } from "@/components/charts/RainChart";
import { TempChart } from "@/components/charts/TempChart";
import { Heading } from "@/components/text/Heading";
import { Charts } from "@/types";
import { useFetchHours } from "@/utils/useFetchHours";
import { useLocalSearchParams, useGlobalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TabOneScreen() {
  const { city } = useLocalSearchParams<{ city: string }>();
  const [chartShown, setChartShown] = useState<Charts>("temp");
  const { data, errorMessage, isLoading } = useFetchHours(city);
  return (
    <>
      {errorMessage && <ErrorMessage content={errorMessage} />}
      <Heading>Hourly Data</Heading>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <View style={styles.buttonCollection}>
            <TouchableOpacity onPress={() => setChartShown("temp")}>
              <Text>Temperature</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChartShown("rain")}>
              <Text>Rain</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChartShown("wind")}>
              <Text>Wind</Text>
            </TouchableOpacity>
          </View>
          {chartShown === "temp" && <TempChart data={data!} />}
          {chartShown === "rain" && <RainChart data={data!} />}

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data?.map((item, key) => (
              <HourlyScrollItem data={item} key={key} />
            ))}
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
  buttonCollection: {
    flexDirection: "row",
  },
});
