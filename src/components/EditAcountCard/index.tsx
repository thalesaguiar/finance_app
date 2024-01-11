import { Divider } from "@components/Divider";
import {
  Container,
  BankAmount,
  BankName,
  Text,
  BankAcountWrapper,
  AmountWrapper,
} from "./styles";
import { useEffect } from "react";

type Props = {
  title: string;
  currentBalance: string;
};

export function EditAcountCard({ title, currentBalance }: Props) {
  useEffect(() => {
    console.log(title, currentBalance);
  }, [title, currentBalance]);

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
