import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

type CityItemProps = {
  city: string;
};

export const CityItem = (props: CityItemProps) => {
  const { city } = props;
  const router = useRouter();
  return (
    <Link href={{ pathname: "/[city]/", params: { city: city } }}>
      <View>
        <Text style={styles.text}>{city}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
});
