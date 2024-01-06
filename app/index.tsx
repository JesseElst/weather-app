import { CityItem } from "@/components/CityItem";
import Colors from "@/constants/Colors";
import { CITY_LIST } from "@/data";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>INDEX</Text>
      <FlatList
        data={CITY_LIST}
        renderItem={(city) => <CityItem city={city.item.name} />}
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
