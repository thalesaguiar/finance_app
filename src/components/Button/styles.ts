import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'NEUTRAL'

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  width: 80%;
  min-height: 60px;
  max-height: 60px;
  background-color: ${({ theme, type }) => 
  type === 'PRIMARY' ? '#7BCC4B' : theme.COLORS.RED_DARK};
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  font-size: 27px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`