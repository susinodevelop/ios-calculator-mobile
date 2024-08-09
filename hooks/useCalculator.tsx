import { useState } from "react";

const useCalculator = () => {
  const [result, setResult] = useState<string>("0");
  const [input, setInput] = useState<string>("");

  const clear = () => {
    setResult("0");
    setInput("");
  };

  const addToInput = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculate = () => {
    try {
      const calculation = eval(input);
      setResult(calculation);
      setInput(String(calculation));
    } catch (error) {
      setResult("Error");
    }
  };

  const add = () => addToInput("+");
  const subtract = () => addToInput("-");
  const multiply = () => addToInput("*");
  const divide = () => addToInput("/");
  const appendNumber = (num: string) => addToInput(String(num));
  const appendDecimal = () => addToInput(".");

  return {
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
  };
};

export default useCalculator;
