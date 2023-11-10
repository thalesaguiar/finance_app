import { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  SectionList,
} from "react-native";
import banks from "../banks.json";
import { Divider } from "./Divider";
import { MoneyStatusBar } from "./MoneyStatusBar";
import { ProfileStats } from "./ProfileStats";
import { Feather } from "@expo/vector-icons";
import { BankAcounts } from "./BankAcounts";

export function Amount() {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState("eye");
  const [showAmount, setShowAmount] = useState("5000,00");

  function HandleMoneyShow() {
    const displayEye = show;
    setShow(!displayEye);
    if (displayEye) {
      setIcon("eye-off");
      setShowAmount("  * * *");
    } else {
      setIcon("eye");
      setShowAmount("5000,00");
    }
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.generalBalance}>
          <MoneyStatusBar />
          <View style={styles.a}>
            <Text style={styles.titleBalance}>Saldo Geral</Text>
            <Text style={styles.amountGeneralBalance}>R$: {showAmount}</Text>
          </View>
          <View style={styles.ab}>
            <Pressable onPress={HandleMoneyShow}>
              <Feather name={icon} size={35} color={"black"} />
            </Pressable>
          </View>
        </View>
      </View>
      <BankAcounts />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFED",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  financial: {
    width: "90%",
    height: 300,
    backgroundColor: "#FFFEFA",
    borderRadius: 20,
  },
  statusbarBalanceWrapper: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
  },
  generalBalance: {
    width: "85%",
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  statusBar: {
    width: 20,
    height: 50,
    marginLeft: 20,
  },
  titleBalance: {
    fontSize: 17,
    color: "grey",
    marginTop: 5,
    marginBottom: 5,
  },
  amountGeneralBalance: {
    fontSize: 25,
    fontWeight: "bold",
  },
  titleBanksBalance: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
    marginBottom: 10,
    marginTop: 20,
  },
  a: {
    flexDirection: "column",
    marginRight: 100,
  },
  ab: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
});
