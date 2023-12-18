import { Divider } from "@components/divider";
import {
  Container,
  BankAmount,
  BankName,
  Text,
  BankAcountWrapper,
  AmountWrapper,
} from "./styles";

type Props = {
  title: string;
  currentBalance: string;
};

export function EditAcountCard({ title, currentBalance }: Props) {
  return (
    <Container>
      <BankAcountWrapper>
        <BankName>{title}</BankName>
        <Divider />
        <AmountWrapper>
          <Text>Saldo atual</Text>
          <BankAmount>'R$' {currentBalance}</BankAmount>
        </AmountWrapper>
      </BankAcountWrapper>
    </Container>
  );
}
