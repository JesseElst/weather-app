import { ErrorMessage } from "@/components/ErrorMessage";
import { HourlyScrollItem } from "@/components/HourlyScrollItem";
import { useFetch } from "@/utils/useFetch";
import { useLocalSearchParams, useGlobalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TabOneScreen() {
  const { city } = useLocalSearchParams<{ city: string }>();
  const { data, errorMessage, isLoading } = useFetch(city);
  return (
    <>
      {errorMessage && <ErrorMessage content={errorMessage} />}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data?.map((item) => (
            <HourlyScrollItem data={item} />
          ))}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
});
