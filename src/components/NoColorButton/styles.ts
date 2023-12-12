import styled from "styled-components/native";
import { Pressable, TouchableOpacity } from 'react-native';
import {theme} from '../../theme'

export const Container = styled(TouchableOpacity)`
  flex: 1;
  
  background-color: ${theme.COLORS.WHITE};
  width: 100%;
  min-height: 45px;
  max-height: 45px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`

export const WrapButton = styled.View`
  width: 85%; 
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1.5px;
  border-color: ${theme.COLORS.GREEN_500};
  min-height: 45px;
  max-height: 45px;
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.COLORS.GREEN_500};
  font-weight: bold;
`