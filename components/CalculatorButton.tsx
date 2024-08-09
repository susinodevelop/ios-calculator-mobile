import React from "react";
import { DimensionValue, Pressable, StyleSheet, Text } from "react-native";

interface Props {
  text: string;
  textColor: string;
  bgColor: string;
  width?: DimensionValue;
  height?: DimensionValue;
  aspectRatio?: number;
  fun: () => void;
}
const CalculatorButton = ({
  text,
  textColor,
  bgColor,
  width = 100,
  height = 100,
  aspectRatio = 1,
  fun,
}: Props) => {
  return (
    <Pressable
      onPress={fun}
      style={{
        ...styles.button,
        backgroundColor: bgColor,
        width,
        height,
        aspectRatio,
      }}
    >
      <Text style={{ ...styles.text, color: textColor }}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderWidth: 1,
    borderRadius: 50,
  },
  text: {
    color: "white",
    fontSize: 50,
  },
});
export default CalculatorButton;
