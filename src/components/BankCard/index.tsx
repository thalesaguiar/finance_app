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
import { Divider } from "@components/divider";
type Props = TouchableOpacityProps & {
  title: string;
  amount: string;
};

export function BankCard({ title, amount }: Props) {
  const navigation = useNavigation();

  function handleEditBank() {
    navigation.navigate("EditBanks");
  }
  return (
    <Container>
      <BankStatsWrapper>
        <BankInfo>
          <FontAwesome name="bank" size={18} />
          <Title>{title}</Title>
        </BankInfo>
        <TouchableOpacity onPress={handleEditBank}>
          <MaterialIcons name="arrow-forward-ios" size={18} />
        </TouchableOpacity>
      </BankStatsWrapper>
      <Divider />
      <AmountWrapper>
        <Text>Seu balanço</Text>
        <Amount>R$ {0}</Amount>
        <TouchableOpacity>
          <FontAwesome name="pencil" size={18} />
        </TouchableOpacity>
      </AmountWrapper>
    </Container>
  );
}
