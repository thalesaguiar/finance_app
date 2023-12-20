import styled from "styled-components/native";
import {theme} from '../../theme';
export const Container = styled.View`
  flex: 1; 
  height: 130px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: green;
`

export const BankAcountWrapper= styled.View`
  width: 90%;
  min-height: 130px;
  max-height: 130px;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 10px;
  padding: 10px;
`

export const AmountWrapper= styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 10px;
`

export const BankName = styled.Text`
  color: ${theme.COLORS.GRAY_500};
  font-size: ${theme.FONT_SIZE.MD}px;
  margin-bottom: 40px;
`

export const Text = styled.Text`
  color: ${theme.COLORS.GRAY_500};
  font-size: ${theme.FONT_SIZE.MD}px;
`

export const BankAmount = styled.Text`
  color: ${theme.COLORS.BLUE};
  font-size: ${theme.FONT_SIZE.SM}px;

`