import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export type GoBackIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: GoBackIconTypeStyleProps;
}

export const Container = styled.View`
  width: 50px;
`;

export const BackButton = styled.TouchableOpacity`
`;

export const BackIcon = styled(AntDesign).attrs<Props>(({ theme, type }) => ({
  size: 32,
  color: type ==='PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE
}))``;
