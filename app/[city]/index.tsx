import {
  ChartButton,
  ErrorMessage,
  ScrollItem,
  RainChart,
  TempChart,
  WindChart,
  Heading,
} from "@/components";
import type { Charts } from "@/types";
import { useFetchHours } from "@/utils";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TabOneScreen() {
  const { city } = useLocalSearchParams<{ city: string }>();
  const [chartShown, setChartShown] = useState<Charts>("temp");
  const { data, errorMessage, isLoading } = useFetchHours(city);
  return (
    <>
      {errorMessage && <ErrorMessage content={errorMessage} />}
      <View style={styles.container}>
        <Heading>Hourly Data</Heading>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <View style={styles.buttonCollection}>
              <ChartButton
                isSelected={chartShown === "temp"}
                title="Temperature"
                handleClick={() => setChartShown("temp")}
              />
              <ChartButton
                title="Rain"
                isSelected={chartShown === "rain"}
                handleClick={() => setChartShown("rain")}
              />
              <ChartButton
                title="Wind"
                isSelected={chartShown === "wind"}
                handleClick={() => setChartShown("wind")}
              />
            </View>
            <View style={styles.chartContainer}>
              {chartShown === "temp" && <TempChart data={data!} />}
              {chartShown === "rain" && <RainChart data={data!} />}
              {chartShown === "wind" && <WindChart data={data!} />}
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              {data?.map((item, key) => (
                <ScrollItem data={item} key={key} />
              ))}
            </ScrollView>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  chartContainer: {
    flex: 1,
  },
  buttonCollection: {
    marginVertical: 10,
    flexDirection: "row",
    gap: 10,
  },
  scrollContainer: {
    marginBottom: 50,
    alignItems: "flex-end",
  },
});
