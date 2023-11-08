import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import banks from "../banks.json";
import { Divider } from "../components/Divider";
import { MoneyStatusBar } from "../components/MoneyStatusBar";
import { ProfileStats } from "../components/ProfileStats";

export function HomeScreen() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#17C74E"
        translucent
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profile}>
            <ProfileStats />
          </View>
          <View style={styles.balance}>
            <View>
              <View style={styles.statusbarBalanceWrapper}>
                <View style={styles.statusBar}>
                  <MoneyStatusBar />
                </View>
                <View style={styles.generalBalance}>
                  <Text style={styles.titleBalance}>Saldo Geral</Text>
                  <Text style={styles.amountGeneralBalance}>R$: 5000,00</Text>
                </View>
              </View>
              <Divider />
              <Text style={styles.titleBanksBalance}>Meus Saldos</Text>
            </View>
            <FlatList
              data={banks.bancos}
              keyExtractor={(item) => item.nome}
              renderItem={({ item }) => (
                <>
                  <View style={styles.logoWrapp}>
                    <Image
                      source={require("../assets/images/nubank.png")}
                      style={styles.logoBank}
                    />
                    <Text style={styles.bankName}>{item.nome}</Text>
                  </View>
                  <View style={styles.teste}>
                    <Divider />
                  </View>
                </>
              )}
            />
            <TouchableOpacity style={styles.buttonWrapper}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Gerenciar Contas</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text> </Text>
          <View style={styles.financial}></View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEB",
    alignItems: "center",
  },
  profile: {
    position: "absolute",
    width: "100%",
    height: 200,
    backgroundColor: "#17C74E",
  },
  balance: {
    width: "90%",
    height: "55%",
    marginTop: 140,
    backgroundColor: "#FFFEFA",
    borderRadius: 20,
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
    width: "50%",
    height: 50,
    justifyContent: "flex-start",
    alignContent: "center",
    flexDirection: "column",
    marginTop: 20,
  },
  statusBar: {
    width: 20,
    height: 50,
    marginLeft: 20,
  },
  titleBalance: {
    fontSize: 17,
    color: "grey",
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
  },
  buttonWrapper: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    backgroundColor: "#DFFEEA",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#17C74E",
  },
  logoBank: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  logoWrapp: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  bankName: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
  },
  teste: {
    flexDirection: "column",
    width: "100%",
    marginTop: 10,
  },
});
