import { View, StyleSheet } from "react-native";

export function MoneyStatusBar() {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  divider: {
    width: 7,
    height: 68,
    backgroundColor: "green",
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 10,
  },
});
