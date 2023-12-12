import styled from 'styled-components/native'
import { theme } from "../../theme";

export const Container = styled.View`
  flex: 1;
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
export const ContentWrapper2 = styled.View`
  background-color: ${theme.COLORS.WHITE};
  width: 85%;
  height: 400px;
  `
  export const AcountsModal = styled.Modal`
  flex: 1;
  background-color: ${theme.COLORS.RED_DARK};
`