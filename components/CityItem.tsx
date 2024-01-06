import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Heading } from "./text/Heading";
import { MaterialIcons } from "@expo/vector-icons";
import Sizes from "@/constants/Sizes";

type CityItemProps = {
  city: string;
};

export const CityItem = (props: CityItemProps) => {
  const { city } = props;
  const router = useRouter();
  return (
    <Link href={{ pathname: "/[city]/", params: { city: city } }} asChild>
      <TouchableOpacity>
        <View style={styles.container}>
          <Heading style={styles.text}>{city}</Heading>
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
  },
});
