import { Form } from "@components/Form";
import {
  AcountCreator,
  Container,
  FormInput,
  FormWrapper,
  HideBalanceWrapper,
  IconSelectButton,
  IconSelectContainer,
  SwitchButton,
  TextIcon,
  ComponentTitle,
  SectionWrapper,
  TextBalanceTitle,
  BackButtonContainer,
  SubmitButtonWrapper,
} from "./styles";
import { Divider } from "@components/divider";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { GoBackButton } from "@components/GoBackButton";
import useModalStore from "../../store";
import { SubmitButton } from "@components/SubmitButton";
import { bankCreate } from "@storage/bank/bankCreate";
import { Alert, Platform, StatusBar } from "react-native";
import { AppError } from "@utils/AppError";
import { useNavigation } from "@react-navigation/native";

export function BanksAddModal() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [bank, setBank] = useState("");
  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (bank.trim().length === 0) {
        Alert.alert("Novo Banco", "Informe o nome do banco");
      }
      await bankCreate(bank);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  async function saveBank() {
    if (await handleNew()) {
      handleNew();
      navigation.navigate("AcountLists");
    }
  }
  return (
    <Container>
      <BackButtonContainer>
        <GoBackButton onPress={() => navigation.navigate("AcountLists")} />
      </BackButtonContainer>
      <Divider/>
      <AcountCreator>
        <SectionWrapper>
          <ComponentTitle>Nome da conta</ComponentTitle>
        </SectionWrapper>
        <FormWrapper>
          <FormInput
            placeholder="Digite nome da conta"
            onChangeText={setBank}
          />
        </FormWrapper>
        <Divider />
        <SectionWrapper>
          <ComponentTitle>Escolha um icone</ComponentTitle>
        </SectionWrapper>
        <IconSelectContainer>
          <IconSelectButton>
            <MaterialIcons name="add" size={30} color={"gray"} />
          </IconSelectButton>
          <TextIcon> Selecione um icone </TextIcon>
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
      <SubmitButtonWrapper>
        <SubmitButton onPress={() => saveBank()} />
      </SubmitButtonWrapper>
    </Container>
  );
}
