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
} from "./styles";
import { Divider } from "@components/divider";
import { MaterialIcons } from "@expo/vector-icons";
import { Touchable, TouchableOpacity } from "react-native";
import { useState } from "react";

export function BanksAddModal() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Container>
      <AcountCreator>
        <SectionWrapper>
          <ComponentTitle>Nome da conta</ComponentTitle>
        </SectionWrapper>
        <FormWrapper>
          <FormInput placeholder="Digite nome da conta" />
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
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
        />
      </HideBalanceWrapper>
    </Container>
  );
}
