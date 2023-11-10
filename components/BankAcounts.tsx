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
  SectionList,
} from "react-native";
import { Divider } from "../components/Divider";

export function BankAcounts() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.listWrapper}>
          <Divider />
          <ScrollView>
            <TouchableOpacity>
              <View style={styles.banksWrapper}>
                <View style={styles.banks}>
                  <Image
                    source={require("../assets/images/itau.png")}
                    style={styles.bankLogo}
                  />
                </View>
                <View style={styles.bankName}>
                  <Text style={styles.bankNameTitle}>Itau</Text>
                  <Text style={styles.bankAcountTypeTitle}>Conta Corrente</Text>
                </View>
                <View style={styles.bankAmount}>
                  <Text style={styles.bankAmountTitle}>R$: 10.000,00</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFED",
    height: 400,
    alignItems: "center",
  },
  listWrapper: {
    width: "85%",
    backgroundColor: "#fff",
    height: 200,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  bankNameTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  banksWrapper: {
    width: "100%",
    height: 61,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginTop: 40,
  },
  banks: {
    height: 70,
    justifyContent: "center",
  },
  bankName: {
    backgroundColor: "#fff",
    justifyContent: "center",
    marginRight: 40,
  },
  bankAmount: {
    justifyContent: "center",
    marginRight: 10,
  },
  bankLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  bankAcountTypeTitle: {
    fontSize: 15,
  },
  bankAmountTitle: {
    fontSize: 19,
    color: "blue",
    fontWeight: "bold",
  },
});
