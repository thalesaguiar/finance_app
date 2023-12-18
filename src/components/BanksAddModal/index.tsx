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
} from "./styles";
import { Divider } from "@components/divider";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { GoBackButton } from "@components/GoBackButton";
import useModalStore from "../../store";
import { SubmitButton } from "@components/SubmitButton";
import { bankCreate } from "@storage/bank/bankCreate";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";

export function BanksAddModal() {
  const [isEnabled, setIsEnabled] = useState(false);
  const { toggleModal } = useModalStore();
  const [bank, setBank] = useState("");

  async function handleNew() {
    try {
      if (bank.trim().length === 0) {
        return Alert.alert("Novo Banco", "Informe o nome do banco");
      }
      await bankCreate(bank);
      return true;
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Banco", error.message);
      } else {
        Alert.alert(
          "Novo Banco",
          "Não foi possível adicionar uma nova conta de banco"
        );
      }
    }
  }

  async function SubmitBankAndClose() {
    {
      handleNew();
    }
    if (await handleNew()) {
      {
        toggleModal();
      }
    }
  }

  return (
    <Container>
      <BackButtonContainer>
        <GoBackButton onPress={toggleModal} />
      </BackButtonContainer>
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

      <SubmitButton onPress={SubmitBankAndClose} />
    </Container>
  );
}
