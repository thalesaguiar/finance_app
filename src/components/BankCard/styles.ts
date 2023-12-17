import { TouchableOpacity } from 'react-native';
import {styled, css} from 'styled-components/native';
import {theme} from '../../theme';
export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 70px;

  background-color: ${theme.COLORS.WHITE};
  border-radius: 5px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_500};
  font-size: ${theme.FONT_SIZE.MD}px;
`;





