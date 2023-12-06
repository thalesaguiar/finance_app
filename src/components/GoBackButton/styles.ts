import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
width: 50px;
`;

export const BackButton = styled.TouchableOpacity`
margin-left: 10px;
`;

export const BackIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.GRAY_300,
}))``;
