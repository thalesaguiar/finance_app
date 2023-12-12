import { TouchableOpacityProps } from "react-native";
import { Container, Title, WrapButton } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function NoColorButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <WrapButton>
        <Title>{title}</Title>
      </WrapButton>
    </Container>
  );
}
