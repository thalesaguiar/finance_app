import { Container, BackIcon, BackButton } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  onPress: () => void;
};

export function GoBackButton({ onPress }: Props) {
  return (
    <Container>
      <BackButton onPress={onPress}>
        <BackIcon name="left" color={"green"} />
      </BackButton>
    </Container>
  );
}
