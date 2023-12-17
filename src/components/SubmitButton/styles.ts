import styled from "styled-components/native";
import {theme} from '../../theme'
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
`

export const RoundSubmitButton = styled.TouchableOpacity`
  width: 25%;
  min-height: 100px;
  max-height: 100px;
  background-color: ${theme.COLORS.GREEN_400};
  margin-bottom: 40px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`
export const Icon = styled(MaterialIcons).attrs(({ theme}) => ({
  size: 45,
  color: theme.COLORS.WHITE
}))``;