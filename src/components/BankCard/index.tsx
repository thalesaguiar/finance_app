import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Container, Title, Amount, AmountWrapper, BankStatsWrapper, Text,  } from "./styles";
import {FontAwesome} from '@expo/vector-icons';
import { Divider } from "@components/divider";
type Props = TouchableOpacityProps & {
  title: string;
  amount: string;
  goTo: ()=>void;
};

export function BankCard({ title, amount, goTo,...rest }: Props) {
  return (
    <Container {...rest}>
      <BankStatsWrapper>
      < FontAwesome name="bank" size={18}/>
      <Title>{title}</Title>
      </BankStatsWrapper>
      <Divider/>
      <AmountWrapper>
      <Text>Seu balanço</Text>      
        <Amount>R$ {0}</Amount>
        <TouchableOpacity onPress={goTo}>
          < FontAwesome name="pencil" size={18}/>
          </TouchableOpacity>
      </AmountWrapper>
    </Container>
  );
}
