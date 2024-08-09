import React from "react";
import CalculatorButton from "./CalculatorButton";
import { DimensionValue } from "react-native";

interface Props {
  value: string;
  bgColor?: string;
  textColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  aspectRatio?: number;
  fun: () => void;
}
const OperatorButton = ({
  value,
  bgColor = "#FF9500",
  textColor = "#FFFFFF",
  width = "20%",
  height = "20%",
  aspectRatio = 1,
  fun,
}: Props) => {
  return (
    <CalculatorButton
      text={value}
      bgColor={bgColor}
      textColor={textColor}
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      fun={fun}
    />
  );
};

export default OperatorButton;
