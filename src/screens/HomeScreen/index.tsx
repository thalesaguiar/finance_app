import React, { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { ProfileStats } from "@components/ProfileStatus";
import { Amount } from "@components/Amount";
import { BanksList } from "@components/BankList";
import { Divider } from "@components/Divider";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
import { NoColorButton } from "@components/NoColorButton";
export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar backgroundColor={"#17c64f"} />
      <ProfileStats />
      <ScrollView>
        <Amount />
        <BanksList />
        <NoColorButton
          title="Gerenciar Contas"
          onPress={() => navigation.navigate("AcountLists")}
        />
      </ScrollView>
    </Container>
  );
}
