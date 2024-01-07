import {
  Container,
  Title,
  LogoImg,
  Paragrph,
  WrapperContent,
  Header,
} from "./styles";
import Pigimg from "@assets/pig2.png";
import {} from "@components/Form/styles";
import { Form } from "@components/Form";
import { Button } from "@components/Button";
import { GoBackButton } from "@components/GoBackButton";
import { useNavigation } from "@react-navigation/native";

export function CreateAcount() {
  const navigation = useNavigation();

  return (
    <Container>
      <WrapperContent>
        <Header>
          <GoBackButton onPress={() => navigation.navigate("Login")} />
          <LogoImg source={Pigimg} />
        </Header>

        <Title>Bem vindo</Title>
        <Paragrph>
          Crie sua conta para começar {"\n"}a ter controle da sua vida
          financeira
        </Paragrph>

        <Form title="Email" placeholder="Digite seu e-mail" />
        <Form title="Senha" placeholder="Digite sua senha" />

        <Button title="Continuar" type="PRIMARY" />
      </WrapperContent>
    </Container>
  );
}
