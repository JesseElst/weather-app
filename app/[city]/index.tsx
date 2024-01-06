import { ErrorMessage } from "@/components/ErrorMessage";
import { HourlyScrollItem } from "@/components/HourlyScrollItem";
import { RainChart } from "@/components/RainChart";
import { TempChart } from "@/components/TempChart";
import { Charts } from "@/types";
import { useFetch } from "@/utils/useFetch";
import { useLocalSearchParams, useGlobalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TabOneScreen() {
  const { city } = useLocalSearchParams<{ city: string }>();
  const [chartShown, setChartShown] = useState<Charts>("temp");
  const { data, errorMessage, isLoading } = useFetch(city);
  return (
    <>
      {errorMessage && <ErrorMessage content={errorMessage} />}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <TempChart data={data!} />
          <RainChart data={data!} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data?.map((item) => (
              <HourlyScrollItem data={item} />
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
});
