import React from "react";
import CalculatorButton from "./CalculatorButton";
import { DimensionValue } from "react-native";

interface Props {
  value: number;
  bgColor?: string;
  textColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  aspectRatio?: number;
  fun: () => void;
}
const NumberButton = ({
  value,
  bgColor = "#505050",
  textColor = "#FFFFFF",
  width = "20%",
  height = "20%",
  aspectRatio = 1,
  fun,
}: Props) => {
  return (
    <CalculatorButton
      text={value.toString()}
      bgColor={bgColor}
      textColor={textColor}
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      fun={fun}
    />
  );
};

export default NumberButton;
