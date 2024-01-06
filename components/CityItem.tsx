import Colors from "@/constants/Colors";
import { Href, Link, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type CityItemProps = {
  city: string;
};

export const CityItem = (props: CityItemProps) => {
  const { city } = props;
  const router = useRouter();
  return (
    <Link href={{ pathname: "/[city]/", params: { city: city } }}>
      {/* <TouchableWithoutFeedback
      onPress={() =>
        router.push({
          pathname: "/[city]/",
          params: { city: "London" },
        })
      }
    > */}
      <View>
        <Text style={styles.text}>{city}</Text>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Link>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
});
