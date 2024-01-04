import { Container, NavigationTab, Text } from "./styles";
import { GoBackButton } from "@components/GoBackButton";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ButtonIcon } from "@components/ButtonAdd";
import {
  ScrollView,
  View,
} from "react-native";
import { useState, useCallback } from "react";
import { banksGetAll } from "@storage/bank/bankGetAll";
import { BankCard } from "@components/BankCard";
import {AntDesign} from '@expo/vector-icons'
export function BankList() {
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
      <NavigationTab>
        <GoBackButton
          type="SECONDARY"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <Text>Contas</Text>
        <ButtonIcon
          icon="add"
          type="SECONDARY"
          onPress={() => navigation.navigate("AddBanks")}
        />
      </NavigationTab>
      <ScrollView
        style={{
          width: "100%",
          marginBottom: 20,
        }}
      >
        {banks.map((item) => (
          <View
            style={{
              width: "100%",
              backgroundColor: "#ededed",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <BankCard title={item} amount={""} goTo={() => (console.log)} /> 
          </View>
        ))}
      </ScrollView>
    </Container>
  );
}
