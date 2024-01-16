import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.COLORS.WHITE_100};
`;

export const BackButtonContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
`;
export const BankName = styled.Text`
  font-size: ${theme.FONT_SIZE.XL}px;
  margin: 10px;
`;

export const BackButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const AcountCreator = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const IconSelectContainer = styled.View`
  width: 100%;
  min-height: 70px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  flex-direction: row;
`;

export const TextIcon = styled.Text`
  color: ${theme.COLORS.GRAY_300};
  font-size: ${theme.FONT_SIZE.LG}px;
`;

export const HideBalanceWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`;

export const TextBalanceTitle = styled.Text`
  color: ${theme.COLORS.GRAY_400};
  font-size: ${theme.FONT_SIZE.MD}px;
`;

export const SwitchButton = styled.Switch``;

export const ComponentTitle = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-weight: bold;
  color: ${theme.COLORS.GRAY_400};
`;

export const ScreenTitle = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-weight: bold;
  color: ${theme.COLORS.GRAY_400};
`;

export const SectionWrapper = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 20px;
`;
