import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.COLORS.WHITE_100};
`;
export const WrapperContent = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 50px;
  align-items: flex-start;
`;
export const LogoImg = styled.Image`
  width: 100px;
  height: 120px;
  margin-left: 90px;
`;
export const Title = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.XL}px;
  margin-bottom: 10px;
`;
export const Paragrph = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  margin-bottom: 30px;
`;
