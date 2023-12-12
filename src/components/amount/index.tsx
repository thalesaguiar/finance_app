import { useState } from "react";
import { Pressable, View } from "react-native";
import { MoneyStatusBar } from "../money-status-bar";
import { Feather } from "@expo/vector-icons";
import {
  Balance,
  Container,
  EyeButtonWrapper,
  GeneralBalance,
  MoneyAmountContainer,
  Title,
} from "./styles";

type IconName = "eye" | "eye-off";

export function Amount() {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState<IconName>("eye");
  const [showAmount, setShowAmount] = useState("0.000,00");

  function HandleMoneyShow() {
    const displayEye = show;
    setShow(!displayEye);
    if (displayEye) {
      setIcon("eye-off");
      setShowAmount("  * * * * *");
    } else {
      setIcon("eye");
      setShowAmount("");
    }
  }
  return (
    <>
      <Container>
        <GeneralBalance>
          <MoneyStatusBar />
          <MoneyAmountContainer>
            <Title>Saldo Geral</Title>
            <Balance>R$: {showAmount}</Balance>
          </MoneyAmountContainer>
          <EyeButtonWrapper>
            <Pressable onPress={HandleMoneyShow}>
              <Feather name={icon} size={35} color={"black"} />
            </Pressable>
          </EyeButtonWrapper>
        </GeneralBalance>
      </Container>
    </>
  );
}
