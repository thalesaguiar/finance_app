import { TouchableOpacityProps } from "react-native";
import { Container, RoundSubmitButton, Icon } from "./styles";

type Props = {
  onPress: () => void;
} & TouchableOpacityProps;

export function GraySubmitButton({ ...rest }: Props) {
  return (
    <Container>
      <RoundSubmitButton {...rest}>
        <Icon name="check" />
      </RoundSubmitButton>
    </Container>
  );
}
