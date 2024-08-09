import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import CalculatorScreen from "./screens/CalculatorScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CalculatorScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "black",
  },
});
