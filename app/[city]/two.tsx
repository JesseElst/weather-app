import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function TabTwoScreen() {
  const { city } = useLocalSearchParams<{ city: string }>();
  console.log("two", city);
  return (
    <View>
      <Text>Test2</Text>
    </View>
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
