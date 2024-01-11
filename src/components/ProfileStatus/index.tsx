import { Feather } from "@expo/vector-icons";
import { Container, WrappProfile, Menssage, ProfilePic } from "./styles";
import { TouchableOpacity } from "react-native";

export function ProfileStats() {
  return (
    <Container>
      <WrappProfile>
        <TouchableOpacity>
        <ProfilePic>
          <Feather name="user" color={"#47C66F"} size={30} />
        </ProfilePic>
        </TouchableOpacity>
        <Menssage>Bem Vindo</Menssage>
      </WrappProfile>
      <TouchableOpacity>
      <Feather color={"#fff"} name="menu" size={36} />
      </TouchableOpacity>
    </Container>
  );
}
