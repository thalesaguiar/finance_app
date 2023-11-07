import { View, Text, StyleSheet } from "react-native";
import { Divider } from "./Divider";

type Props = {
  banks: string;
};

export function BankLists({ banks }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.banksWrapper}>
        <Text style={styles.bankName}>{banks}</Text>
        <Text style={styles.amount}>R$ 1.000,00</Text>
      </View>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 40,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  bankName: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 70,
  },
  banksWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#6A8FD4",
    marginRight: 20,
  },
});
