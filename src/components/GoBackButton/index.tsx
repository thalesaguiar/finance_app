import { Container, BackIcon, BackButton } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function GoBackButton() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("Login");
  }
  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon name="left" />
      </BackButton>
    </Container>
  );
}
