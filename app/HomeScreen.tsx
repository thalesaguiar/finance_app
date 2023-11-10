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
import banks from "../banks.json";
import { Divider } from "../components/Divider";
import { MoneyStatusBar } from "../components/MoneyStatusBar";
import { ProfileStats } from "../components/ProfileStats";
import { Amount } from "../components/Amount";
import { Feather } from "@expo/vector-icons";
import { BankAcounts } from "../components/BankAcounts";

export function HomeScreen() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#17C74E"
        translucent
      />

      <ScrollView style={styles.container}>
        <View>
          <View style={styles.profile}>
            <ProfileStats />
          </View>
          <View style={styles.amountWrapper}>
            <Amount />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFED",
  },
  profile: {
    flex: 1,
    width: "100%",
    height: 200,
    backgroundColor: "#17C74E",
    justifyContent: "center",
  },
  modalButtonWrapper: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 50,
  },
  amountWrapper: {
    position: "relative",
    bottom: 10,
    zIndex: 100,
  },
});
