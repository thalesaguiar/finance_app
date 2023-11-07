import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { HomeScreen } from "../HomeScreen";

export default function TabOneScreen() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
