import { TouchableOpacity } from 'react-native';
import {styled, css} from 'styled-components/native';
import {theme} from '../../theme';

export const Container = styled(TouchableOpacity)`
  width: 90%;
  height: 120px;

  background-color: ${theme.COLORS.WHITE};
  border-radius: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_500};
  font-size: ${theme.FONT_SIZE.MD}px;
`;

export const Amount = styled.Text`
  color: ${theme.COLORS.BLUE};
  font-size: ${theme.FONT_SIZE.SM}px;
`;




