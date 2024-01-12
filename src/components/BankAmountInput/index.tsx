import { InputAmount } from "./styles";

export default function BankamountInput() {
  return (
    <InputAmount
      placeholder="R$ "
      placeholderTextColor={"black"}
      keyboardType="decimal-pad"
    />
  );
}
