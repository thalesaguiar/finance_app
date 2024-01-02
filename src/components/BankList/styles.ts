import styled from "styled-components/native";
import {theme} from '../../theme';
export const Container = styled.View`
  width: 100%;
  background-color: ${theme.COLORS.WHITE_100};
  justify-content: center;
  align-items: center;
`

export const BanksWrapper = styled.View`
  width: 85%;
  background-color: ${theme.COLORS.WHITE};  
  justify-content: center;
  align-items: flex-start;
` 

export const Text = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  color: ${theme.COLORS.GRAY_500};
  margin-left: 20px;
`

export const WrapBankComponent = styled.View`
  width: 85%;
  min-height: 60px;
  max-height: 60px;

  background-color: ${theme.COLORS.WHITE};  
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

`

export const ButtonWrapper = styled.View`
  width: 85%;
  background-color: ${theme.COLORS.WHITE};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: 50px;
`