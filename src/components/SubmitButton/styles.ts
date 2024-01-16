import styled from "styled-components/native";
import { theme } from "../../theme";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export const RoundSubmitButton = styled.TouchableOpacity`
  width: 20%;
  min-height: 80px;
  max-height: 80px;
  background-color: ${theme.COLORS.GREEN_400};
  margin-bottom: 30px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 40,
  color: theme.COLORS.WHITE,
}))``;
