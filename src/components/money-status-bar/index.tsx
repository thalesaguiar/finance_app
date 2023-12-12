import { AmountStatus, Container, StatusBarTypeStyleProps } from "./styles";

type Props = {
  type?: StatusBarTypeStyleProps;
};

export function MoneyStatusBar({ type = "PRIMARY", ...rest }: Props) {
  return (
    <Container>
      <AmountStatus type="PRIMARY" {...rest} />
    </Container>
  );
}
