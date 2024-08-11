import React from "react";
import { Pressable, Text } from "react-native";
import { colors, globalStyles } from "../theme/theme";

interface Props {
  text: string;
  color: string;
  style?: any;
  fun: () => void;
}
const CalculatorButton = ({ text, color, style, fun }: Props) => {
  return (
    <Pressable
      onPress={fun}
      style={{
        ...globalStyles.button,
        ...style,
      }}
    >
      <Text style={{ ...globalStyles.buttonText, color }}>{text}</Text>
    </Pressable>
  );
};

export default CalculatorButton;
