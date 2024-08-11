import { StyleSheet } from "react-native";

export const colors = {
  darkGray: "#2D2D2D",
  lightGray: "#9B9B9B",
  orange: "#FF9427",

  textFunctional: "#000000",
  textNumber: "#FFFFFF",
  textOperator: "FFFFFF",
  background: "#000000",
};

export const globalStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 30,
  },
  calculation: {
    color: "gray",
    fontSize: 30,
  },
  result: {
    color: "white",
    fontSize: 50,
  },
  functionButton: {
    backgroundColor: "#D4D4D2",
    width: "20%",
    height: "20%",
    aspectRatio: 1,
  },
  operatorButton: {
    backgroundColor: "#FF9500",
    width: "20%",
    height: "20%",
    aspectRatio: 1,
  },
  numberButton: {
    backgroundColor: "#505050",
    width: "20%",
    height: "20%",
    aspectRatio: 1,
  },
  ceroButton: {
    width: "45%",
    height: "20%",
    aspectRatio: 2.25 / 1,
  },
});
