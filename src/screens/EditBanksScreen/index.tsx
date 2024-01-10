import {
  AcountCreator,
  Container,
  HideBalanceWrapper,
  IconSelectContainer,
  SwitchButton,
  TextIcon,
  ComponentTitle,
  SectionWrapper,
  TextBalanceTitle,
  BackButtonContainer,
  BackButtonWrapper,
  ScreenTitle,
  BankName,
} from "./styles";
import { Divider } from "@components/divider";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { GoBackButton } from "@components/GoBackButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, TouchableOpacity } from "react-native";
import { bankRemoveByName } from "@storage/bank/bankRemoveByName";

export function EditBanks({ route }: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const { bankName } = route.params;

  async function bankRemove() {
    try {
      await bankRemoveByName(bankName);
      console.log("BankRemove");
      navigation.navigate("AcountLists");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover Banco", "Não foi possível remover este banco");
    }
  }

  async function handleBankRemove() {
    Alert.alert("Remover", "Deseja remover o Banco?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => bankRemove(),
      },
    ]);
  }

  return (
    <Container>
      <BackButtonContainer>
        <BackButtonWrapper>
          <GoBackButton onPress={() => navigation.navigate("AcountLists")} />
          <ScreenTitle>Editar conta</ScreenTitle>
        </BackButtonWrapper>
        <TouchableOpacity onPress={handleBankRemove}>
          <MaterialIcons name="delete" size={30} color={"red"} />
        </TouchableOpacity>
      </BackButtonContainer>
      <Divider />
      <AcountCreator>
        <SectionWrapper>
          <ComponentTitle>Nome da conta</ComponentTitle>
          <BankName>{bankName}</BankName>
        </SectionWrapper>
        <Divider />
        <SectionWrapper>
          <ComponentTitle>Escolha um icone</ComponentTitle>
        </SectionWrapper>
        <IconSelectContainer>
          <TextIcon> Mudar o ícone </TextIcon>
        </IconSelectContainer>
      </AcountCreator>
      <Divider />
      <HideBalanceWrapper>
        <TextBalanceTitle> Mostrar saldo da conta </TextBalanceTitle>
        <SwitchButton
          trackColor={{ false: "#d9d4dc", true: "#00B37E" }}
          thumbColor={"#f4f3f4"}
          ios_backgroundColor={"#3e3e3e"}
          onValueChange={setIsEnabled}
          value={isEnabled}
          style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
        />
      </HideBalanceWrapper>
    </Container>
  );
}
