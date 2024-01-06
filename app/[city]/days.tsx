import { Heading } from "@/components/text/Heading";
import { useFetchDays } from "@/utils/useFetchDays";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default function TabTwoScreen() {
  const { city } = useLocalSearchParams<{ city: string }>();
  const { data, errorMessage, isLoading } = useFetchDays("London");

  return (
    <View style={styles.container}>
      <Heading>7-day forecast</Heading>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={(day) => (
            <View>
              <Text>{day.item.day}</Text>
              <Text>{day.item.minTemp}</Text>
              <Text>{day.item.condition}</Text>
            </View>
          )}
        ></FlatList>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
