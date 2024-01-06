import { CityItem } from "@/components/CityItem";
import { Heading } from "@/components/text/Heading";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
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
      <StatusBar barStyle={"light-content"} />
      <Text style={styles.heading}>Weather App</Text>
      <FlatList
        data={CITY_LIST}
        renderItem={(city) => <CityItem city={city.item.name} />}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: Colors.white, height: 1 }}></View>
        )}
      />
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  heading: {
    marginTop: 80,
    fontSize: Sizes.h1,
    color: Colors.white,
    fontWeight: "bold",
    paddingHorizontal: 40,
  },
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    gap: 20,
  },
});
