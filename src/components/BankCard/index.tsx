import { TouchableOpacityProps } from "react-native";
import { Container, Title, Amount } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  amount: string;
};

export function BankCard({ title, amount, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Amount>R$ {0}</Amount>
    </Container>
  );
}
