import {
  Container,
  Title,
  Amount,
  AmountWrapper,
  BankStatsWrapper,
  Text,
  SkipButton,
  BankInfo,
} from "./styles";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "@components/Divider";
import { useState } from "react";
type Props = TouchableOpacityProps & {
  title: string;
  amount: string;
  goTo: () => void;
  openModal: () => void;
};

export function BankCard({ title, amount, goTo, openModal }: Props) {
  return (
    <Container>
      <BankStatsWrapper>
        <BankInfo>
          <FontAwesome name="bank" size={18} />
          <Title>{title}</Title>
        </BankInfo>
        <TouchableOpacity onPress={goTo}>
          <MaterialIcons name="arrow-forward-ios" size={18} />
        </TouchableOpacity>
      </BankStatsWrapper>
      <Divider />
      <AmountWrapper>
        <Text>Seu balanço</Text>
        <Amount>R$ {0}</Amount>
        <TouchableOpacity onPress={openModal}>
          <FontAwesome name="pencil" size={18} />
        </TouchableOpacity>
      </AmountWrapper>
    </Container>
  );
}
