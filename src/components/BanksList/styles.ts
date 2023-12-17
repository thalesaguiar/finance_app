import styled from 'styled-components/native'
import { theme } from "../../theme";
import ReactNativeModal from 'react-native-modal';

export type BackButtonContainerStylePorps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: BackButtonContainerStylePorps;
}

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  `

export const ContentWrapper = styled.View`
  background-color: ${theme.COLORS.WHITE};
  width: 85%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-weight: bold;
  color: ${theme.COLORS.GRAY_600};
  margin-top: 10px;
  margin-left: 20px;
`

  export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: ${theme.COLORS.WHITE};
`

export const BackButtonContainer = styled.View`
  background-color: ${theme.COLORS.GREEN_400};
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row ;
  padding: 10px;
  `

export const BackButtonContainerB = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.WHITE_100};
  width: 100%;
  flex-direction: row;
  padding: 10px;
`
 
export const TopTitle = styled.Text`
font-size: ${theme.FONT_SIZE.LG}px;
font-weight: 600;
color: ${theme.COLORS.GREEN_400};
margin-right: 200px;
`

export const TopTitle2 = styled.Text`
font-size: ${theme.FONT_SIZE.LG}px;
font-weight: 600;
color: ${theme.COLORS.GRAY_500};
margin-right: 200px;
`

export const ModalB = styled(ReactNativeModal)`

`