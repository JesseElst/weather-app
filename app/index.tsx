import { CityItem } from "@/components/CityItem";
import Colors from "@/constants/Colors";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CITIES = ["Amsterdam", "New York", "Berlin"] as const;

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>INDEX</Text>
      <FlatList
        data={CITIES}
        renderItem={(item) => <CityItem city={item.item} />}
      />
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
