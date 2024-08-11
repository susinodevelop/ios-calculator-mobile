import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalculatorButton from "../components/CalculatorButton";
import useCalculator from "../hooks/useCalculator";
import { colors, globalStyles } from "../theme/theme";

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
    percentage,
    toggleSign,
  } = useCalculator();

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={globalStyles.result}>{result}</Text>
        <Text style={globalStyles.calculation}>{input}</Text>
      </View>
      <View style={styles.buttons}>
        <CalculatorButton
          text={"C"}
          color={colors.textFunctional}
          style={globalStyles.functionButton}
          fun={clear}
        />
        <CalculatorButton
          text={"+/-"}
          color={colors.textFunctional}
          style={globalStyles.functionButton}
          fun={toggleSign}
        />
        <CalculatorButton
          text={"%"}
          color={colors.textFunctional}
          style={globalStyles.functionButton}
          fun={percentage}
        />
        <CalculatorButton
          text={"/"}
          color={colors.textOperator}
          style={globalStyles.operatorButton}
          fun={divide}
        />
        <CalculatorButton
          text={"7"}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={() => appendNumber("7")}
        />
        <CalculatorButton
          text={"8"}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={() => appendNumber("8")}
        />
        <CalculatorButton
          text={"9"}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={() => appendNumber("9")}
        />
        <CalculatorButton
          text={"*"}
          color={colors.textOperator}
          style={globalStyles.operatorButton}
          fun={multiply}
        />
        <CalculatorButton
          text={"4"}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={() => appendNumber("4")}
        />
        <CalculatorButton
          text={"5"}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={() => appendNumber("5")}
        />
        <CalculatorButton
          text={"6"}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={() => appendNumber("6")}
        />
        <CalculatorButton
          text={"-"}
          color={colors.textOperator}
          style={globalStyles.operatorButton}
          fun={subtract}
        />
        <CalculatorButton
          text={"1"}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={() => appendNumber("1")}
        />
        <CalculatorButton
          text={"2"}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={() => appendNumber("2")}
        />
        <CalculatorButton
          text={"3"}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={() => appendNumber("3")}
        />
        <CalculatorButton
          text={"+"}
          color={colors.textOperator}
          style={globalStyles.operatorButton}
          fun={add}
        />
        <CalculatorButton
          text={"0"}
          color={colors.textNumber}
          style={{ ...globalStyles.numberButton, ...globalStyles.ceroButton }}
          fun={() => appendNumber("0")}
        />
        <CalculatorButton
          text={"."}
          color={colors.textNumber}
          style={globalStyles.numberButton}
          fun={appendDecimal}
        />
        <CalculatorButton
          text={"="}
          color={colors.textOperator}
          style={globalStyles.operatorButton}
          fun={calculate}
        />
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
    flex: 0.35,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: 30,
  },
  buttons: {
    flex: 0.65,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default CalculatorScreen;
