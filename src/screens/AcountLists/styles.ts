import {styled} from 'styled-components/native';
import {theme} from '../../theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color:${theme.COLORS.WHITE_100};
  justify-content: flex-start;
`

export const NavigationTab = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  
  background-color: ${theme.COLORS.GREEN_400};
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  margin-top: 23px;
`

export const Text = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.LG}px;
`