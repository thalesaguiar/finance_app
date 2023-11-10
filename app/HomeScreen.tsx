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

export function HomeScreen() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#17C74E"
        translucent
      />
      <View style={styles.profile}>
        <ProfileStats />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.amountWrapper}>
          <Amount />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEB",
    marginTop: 200,
  },
  profile: {
    position: "absolute",
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
    bottom: 50,
  },
});
