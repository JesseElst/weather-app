import Colors from "@/constants/Colors";
import { Text, View, StyleSheet } from "react-native";

type ErrorMessageProps = {
  content: string;
};

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { content } = props;
  return (
    <View style={styles.errorMessage}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    backgroundColor: Colors.red,
    paddingVertical: 15,
    position: "absolute",
    zIndex: 15,
    width: "100%",
    paddingHorizontal: 15,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
