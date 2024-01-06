import { StyleSheet, Text } from "react-native";

export const Heading = (props: Text["props"]) => {
  return <Text {...props} style={[props.style, styles.heading]}></Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
