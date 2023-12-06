import { Colors } from "react-native/Libraries/NewAppScreen";
import { Container, FormEmailInput, FormPasswordInput, Title } from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = {
  title: string;
};

export function Form({ title, ...rest }: Props & TextInputProps) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Title>{title}</Title>

      <FormEmailInput placeholderTextColor={COLORS.GRAY_200} {...rest} />
    </Container>
  );
}
