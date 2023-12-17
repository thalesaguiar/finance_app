import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.COLORS.WHITE_100};
  width: 100%;
  align-items: center;
`

export const FormEmailInput = styled.TextInput`
  width: 80%;
  height: 50px;
  border: solid;
  border-color: ${(props) => props.theme.COLORS.GRAY_200};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`

export const FormPasswordInput = styled.TextInput`
  width: 80%;
  height: 50px;
  border: solid;
  border-color: ${(props) => props.theme.COLORS.GRAY_200};
  border-radius: 10px;
  padding: 10px;
`

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  width: 80%;
  margin-bottom: 5px;
`