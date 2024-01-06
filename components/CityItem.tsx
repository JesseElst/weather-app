import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Sizes from "@/constants/Sizes";

type CityItemProps = {
  city: string;
};

export const CityItem = (props: CityItemProps) => {
  const { city } = props;
  return (
    <Link href={{ pathname: "/[city]/", params: { city: city } }} asChild>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.text}>{city}</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            color={Colors.white}
            size={Sizes.icon}
          />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 20,
  },
});
