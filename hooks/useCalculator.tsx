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
      setResult(String(calculation));
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
  const appendDecimal = () => {
    if (!input.includes(".")) {
      addToInput(".");
    }
  };

  const percentage = () => {
    if (input) {
      try {
        const current = parseFloat(input);
        const newValue = current / 100;
        setResult(String(newValue));
        setInput(String(newValue));
      } catch (error) {
        setResult("Error");
      }
    }
  };
  
  const toggleSign = () => {
    if (input) {
      try {
        const current = parseFloat(input);
        const newValue = current * -1;
        setResult(String(newValue));
        setInput(String(newValue));
      } catch (error) {
        setResult("Error");
      }
    }
  };

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
    percentage,   
    toggleSign,   
  };
};

export default useCalculator;
