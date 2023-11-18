import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
    background-color: #EFEFED;
    height: 400px;
    align-items: center;
`

export const BankListWrapper = styled.View`
    width: 85%;
    background-color: #fff;
    height: 200px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const BanksInfo = styled.View`
    width: 100%;
    height: 61px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    margin-top: 40px;
`
export const BanksLogo = styled.View`
    height: 70px;
    justify-content: center;
`

export const Icon = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-left: 10px;
`

export const BankName = styled.View`
    background-color: #fff;
    justify-content: center;
    margin-right: 40px;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

export const BankType = styled.Text`
    font-size: 15px
`

export const BankAmountWrapper = styled.View`
    justify-content: center;
    margin-right: 10px;
`

export const AmountBank = styled.Text`
    font-size: 19px;
    color: blue;
    font-weight: bold;
`