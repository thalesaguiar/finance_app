import React, { useState } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { ProfileStats } from "@components/profile-status";
import { Amount } from "@components/amount";
import { BanksList } from "@components/BankList";
import { Divider } from "@components/divider";
import { theme } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={`${theme.COLORS.GREEN_500}`}
        translucent
      />

      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <ProfileStats />
        </View>
        <Amount />
        <Divider />
        <BanksList />
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
    width: "100%",
  },
});
