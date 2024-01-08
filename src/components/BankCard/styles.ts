import { TouchableOpacity } from 'react-native';
import {styled, css} from 'styled-components/native';
import {theme} from '../../theme';

export const Container = styled.View`
  width: 90%;
  height: 120px;

  background-color: ${theme.COLORS.WHITE};
  border-radius: 5px;

  align-items: center;
  justify-content: flex-start;
  padding: 24px;
`

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_500};
  font-size: ${theme.FONT_SIZE.MD}px;
  margin-left: 10px;
`

export const Amount = styled.Text`
  color: ${theme.COLORS.BLUE};
  font-size: ${theme.FONT_SIZE.MD}px;
  margin-left: 10px;
  margin-right: 50%;
`

export const AmountWrapper = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`

export const BankStatsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Text = styled.Text`
  font-size: 16px;
`

export const SkipButton = styled(TouchableOpacity)`
  justify-content: center;
  margin-right: 12px;
`

export const BankInfo = styled.View`
  flex-direction: row;
`

