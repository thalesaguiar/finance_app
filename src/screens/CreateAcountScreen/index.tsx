import {
  Container,
  Title,
  LogoImg,
  Paragrph,
  WrapperContent,
  Header,
} from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Pigimg from "@assets/pig2.png";
import {} from "@components/Form/styles";
import { Form } from "@components/Form";
import { Button } from "@components/Button";
import { GoBackButton } from "@components/GoBackButton";

export function CreateAcount() {
  return (
    <Container>
      <WrapperContent>
        <Header>
          <GoBackButton />
          <LogoImg source={Pigimg} />
        </Header>

        <Title>Bem vindo</Title>
        <Paragrph>
          Crie sua conta para começar{"\n"}a ter controle da sua vida financeira
        </Paragrph>

        <Form title="Email" placeholder="Digite seu e-mail" />
        <Form title="Senha" placeholder="Digite sua senha" />

        <Button title="Continuar" type="PRIMARY" />
      </WrapperContent>
    </Container>
  );
}
