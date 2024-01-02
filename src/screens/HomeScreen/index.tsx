import React, { useState } from "react";
import { StatusBar} from "react-native";
import { ProfileStats } from "@components/profile-status";
import { Amount } from "@components/amount";
import { BanksList } from "@components/BankList";
import { Divider } from "@components/divider";
import { useNavigation } from "@react-navigation/native";
import {Container} from './styles'
export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Container >
      <StatusBar 
        backgroundColor={'#17c64f'}
      />
      <ProfileStats/>
      <Amount/>
      <BanksList/>
    </Container>
  );
}
