import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { ProfileStats } from "@components/profile-status";
import { Amount } from "@components/amount";
import { BankAcounts } from "@components/bank-acounts";

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
