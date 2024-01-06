import { CITY_LIST } from "@/data";
import { useFetch } from "@/utils/useFetch";
import { useLocalSearchParams, useGlobalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TabOneScreen() {
  const { city } = useLocalSearchParams<{ city: string }>();
  const { data, errorMessage, isLoading } = useFetch("Berlin");
  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data?.map((item) => (
            <Text>{item.time}</Text>
          ))}
        </ScrollView>
      )}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
