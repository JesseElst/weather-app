import { ErrorMessage, ListItem, Heading } from "@/components";

import Colors from "@/constants/Colors";
import { useFetchDays } from "@/utils";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default function TabTwoScreen() {
  const { city } = useLocalSearchParams<{ city: string }>();
  const { data, isLoading, errorMessage } = useFetchDays(city);

  return (
    <>
      {errorMessage && <ErrorMessage content={errorMessage} />}
      <View style={styles.container}>
        <Heading style={styles.header}>7-day forecast</Heading>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={(day) => <ListItem data={day.item} />}
            ItemSeparatorComponent={() => (
              <View style={{ backgroundColor: Colors.primary, height: 1 }} />
            )}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
