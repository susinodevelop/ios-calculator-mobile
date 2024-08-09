import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalculatorButton from "../components/CalculatorButton";
import useCalculator from "../hooks/useCalculator";
import NumberButton from "../components/NumberButton";
import OperatorButton from "../components/OperatorButton";
import FunctionalButton from "../components/FunctionalButton";

const CalculatorScreen = () => {
  const {
    result,
    input,
    clear,
    add,
    subtract,
    multiply,
    divide,
    appendNumber,
    appendDecimal,
    calculate,
  } = useCalculator();

    function clearInput() {
        throw new Error("Function not implemented.");
    }

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.calculation}>{input}</Text>
        {/*TODO revisar lo que se muestra en este texto */}
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <FunctionalButton value={"C"} fun={clear} />
        <FunctionalButton value={"+/-"} fun={() => {}} />
        <FunctionalButton value={"%"} fun={() => {}} />
        <OperatorButton value={"/"} fun={divide} />
        <NumberButton value={7} fun={() => appendNumber("7")} />
        <NumberButton value={8} fun={() => appendNumber("8")} />
        <NumberButton value={9} fun={() => appendNumber("9")} />
        <OperatorButton value={"*"} fun={multiply} />
        <NumberButton value={4} fun={() => appendNumber("4")} />
        <NumberButton value={5} fun={() => appendNumber("5")} />
        <NumberButton value={6} fun={() => appendNumber("6")} />
        <OperatorButton value={"-"} fun={subtract} />
        <NumberButton value={1} fun={() => appendNumber("1")} />
        <NumberButton value={2} fun={() => appendNumber("2")} />
        <NumberButton value={3} fun={() => appendNumber("3")} />
        <OperatorButton value={"+"} fun={add} />
        <NumberButton
          value={0}
          width="40%"
          height="20%"
          aspectRatio={2 / 1}
          fun={() => appendNumber("0")}
        />
        <OperatorButton value={"."} fun={appendDecimal} />
        <OperatorButton value={"="} fun={()=>{
            calculate()
        }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  screenContainer: {
    flex: 0.4,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: 30,
  },
  calculation: {
    color: "white",
    fontSize: 50,
  },
  result: {
    color: "gray",
    fontSize: 40,
  },
  buttons: {
    flex: 0.6,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 60,
  },
});

export default CalculatorScreen;
