import styled from "styled-components/native";
import {theme} from '../../theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.COLORS.WHITE_100};
`

export const BackButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
  margin-left: 20px;
`

export const AcountCreator = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 5px;
`

export const FormInput = styled.TextInput `
  width: 100%;
  height: 50px;
  border: none;
  padding: 10px;
  font-size: ${theme.FONT_SIZE.LG}px;


`

export const FormWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`

export const IconSelectContainer = styled.View`
  width: 100%;
  min-height: 70px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  flex-direction: row;
`

export const IconSelectButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  margin-left: 10px;
  background-color: ${theme.COLORS.GRAY_100};
  border-radius: 50px;
  border-width: 3px;
  border-style: dashed;
  border-color: ${theme.COLORS.GRAY_300};
`

export const TextIcon = styled.Text`
  color: ${theme.COLORS.GRAY_300};
  font-size: ${theme.FONT_SIZE.LG}px;
`

export const HideBalanceWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
`

export const TextBalanceTitle = styled.Text`
  color: ${theme.COLORS.GRAY_400};
  font-size: ${theme.FONT_SIZE.MD}px;
`

export const SwitchButton = styled.Switch`
  
`

export const ComponentTitle = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-weight: bold;
  color: ${theme.COLORS.GRAY_400};
`

export const SectionWrapper = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 20px;
`

export const SubmitButtonWrapper = styled.View`
  width: 100%;
  min-height: 90%;
  justify-content: center;
  align-items: center;
`