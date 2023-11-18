import React from "react";
import { ScrollView, TouchableOpacity} from "react-native";
import { Divider } from "../divider";
import { AmountBank, BankAmountWrapper, BankListWrapper, BankName, BankType, BanksInfo, BanksLogo, Container, Icon, Title } from "./styles";

export function BankAcounts() {
  return (
      <Container>
        <BankListWrapper>
          <Divider />
          <ScrollView>
            <TouchableOpacity>
              <BanksInfo>
                <BanksLogo>
                  <Icon source={require("@assets/itau.png")}/>
                </BanksLogo>
                <BankName>
                  <Title>Itau</Title>
                  <BankType>Conta Corrente</BankType>
                </BankName>
                <BankAmountWrapper>
                  <AmountBank>R$: 10.000,00</AmountBank>
                </BankAmountWrapper>
              </BanksInfo>
            </TouchableOpacity>
          </ScrollView>
        </BankListWrapper>
      </Container>
  );
}
