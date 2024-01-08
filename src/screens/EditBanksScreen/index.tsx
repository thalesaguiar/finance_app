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
} from "./styles";
import { Divider } from "@components/divider";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { GoBackButton } from "@components/GoBackButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export function EditBanks() {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();

  return (
    <Container>
      <BackButtonContainer>
        <BackButtonWrapper>
          <GoBackButton onPress={() => navigation.navigate("AcountLists")} />
          <ScreenTitle>Editar conta</ScreenTitle>
        </BackButtonWrapper>
        <TouchableOpacity>
          <MaterialIcons name="delete" size={30} color={"red"} />
        </TouchableOpacity>
      </BackButtonContainer>
      <Divider />
      <AcountCreator>
        <SectionWrapper>
          <ComponentTitle>Nome da conta</ComponentTitle>
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
