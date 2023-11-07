import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { BankLists } from "../components/BankLists";
import { Divider } from "../components/Divider";

export function HomeScreen() {
  const banks = ["Itaú", "Nubak", "Neon", "Banco Do Brasil", "Caixa"];
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#17C74E"
        translucent
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profile}></View>
          <View style={styles.balance}>
            <View>
              <View style={styles.generalBalance}>
                <Text style={styles.titleBalance}>Saldo Geral</Text>
                <Text style={styles.amountGeneralBalance}>R$: 5000,00 </Text>
              </View>
              <Divider />
              <Text style={styles.titleBanksBalance}>Meus Saldos</Text>
            </View>
            <FlatList
              data={banks}
              keyExtractor={(item) => item}
              renderItem={({ item }) => <BankLists key={item} banks={item} />}
            />
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
    height: "50%",
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
  generalBalance: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 50,
    marginTop: 20,
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
});
