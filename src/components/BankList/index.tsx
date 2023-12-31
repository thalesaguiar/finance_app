import { useCallback, useState } from "react";
import {
  Container,
  Text,
  BanksWrapper,
  WrapBankComponent,
  ButtonWrapper,
} from "./styles";
import { banksGetAll } from "@storage/bank/bankGetAll";
import { useFocusEffect } from "@react-navigation/native";
import { NoColorButton } from "@components/NoColorButton";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "@components/divider";
import { ScrollView } from "react-native";

export function BanksList() {
  const navigation = useNavigation();
  const [banks, setBanks] = useState<string[]>([]);

  async function fetchBanks() {
    try {
      const data = await banksGetAll();
      setBanks(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchBanks();
    }, [])
  );
  return (
    <Container>
      <BanksWrapper>
        <Text>Minhas Contas</Text>
      </BanksWrapper>
      {banks.slice(0,4).map((item) => (
        <WrapBankComponent>
          <Text>{item}</Text>
        </WrapBankComponent>
      ))}
    </Container>
  );
}
