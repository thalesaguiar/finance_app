import {
  Container,
  BackIcon,
  BackButton,
  GoBackIconTypeStyleProps,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  onPress: () => void;
  type?: GoBackIconTypeStyleProps;
};

export function GoBackButton({ type = "PRIMARY", onPress }: Props) {
  return (
    <Container>
      <BackButton onPress={onPress}>
        <BackIcon name="left" type={type} />
      </BackButton>
    </Container>
  );
}
