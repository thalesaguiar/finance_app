import { View, StyleSheet } from "react-native";

export function Divider() {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  divider: {
    width: "85%",
    height: 1,
    backgroundColor: "gray",
    opacity: 0.1,
  },
});
