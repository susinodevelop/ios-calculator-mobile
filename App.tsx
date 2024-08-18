import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar as NativeStatusBar,
} from "react-native";
import CalculatorScreen from "./screens/CalculatorScreen";
import * as NavigationBar from "expo-navigation-bar";
import React = require("react");

export default function App() {
  React.useEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="black"/>
      <CalculatorScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
    backgroundColor: "black",
  },
});
