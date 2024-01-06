import Colors from "@/constants/Colors";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

type ChartButtonProps = {
  title: string;
  handleClick: () => void;
  isSelected: boolean;
};

export const ChartButton = (props: ChartButtonProps) => {
  const { title, handleClick, isSelected } = props;
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={[styles.button, isSelected && styles.selected]}>
        <Text style={[styles.text, isSelected && styles.textSelected]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  selected: {
    backgroundColor: Colors.secondary,
  },
  text: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
  },
  textSelected: {
    color: Colors.white,
  },
});
