import { Feather } from "@expo/vector-icons";
import { Container, WrappProfile, Menssage, ProfilePic } from "./styles";

export function ProfileStats() {
  return (
    <Container>
      <WrappProfile>
        <ProfilePic>
          <Feather name="user" color={"#47C66F"} size={30} />
        </ProfilePic>
        <Menssage>Bem Vindo</Menssage>
      </WrappProfile>
      <Feather color={"#fff"} name="bell" size={36} />
    </Container>
  );
}
