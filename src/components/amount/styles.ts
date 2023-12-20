import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
    background-color: ${(props) => props.theme.COLORS.WHITE_100};
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const GeneralBalance = styled.View`
    width: 85%;
    height: 80px;
    background-color: ${(props) => props.theme.COLORS.WHITE };
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    margin-top: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const MoneyAmountContainer = styled.View`
    flex-direction: column;
    margin-right: 100px;
`

export const Title = styled.Text`
    font-size: 17px;
    color: ${(props) => props.theme.COLORS.GRAY_700};
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 5px;
`

export const Balance = styled.Text`
    font-size: 25px;
    font-weight: bold;
`

export const EyeButtonWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
`