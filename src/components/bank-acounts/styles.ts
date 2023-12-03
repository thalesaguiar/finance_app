import { TouchableOpacity } from 'react-native';
import {styled,css} from 'styled-components/native';


export const Container = styled(TouchableOpacity)`
    flex: 1;
    align-items: center;
`

export const BankListWrapper = styled.View`
    width: 85%;
    background-color: ${(props) => props.theme.COLORS.WHITE };
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const BanksInfo = styled.View`
    width: 100%;
    height: 90px;
    flex-direction: row;
    justify-content: space-between;
`
export const BanksLogo = styled.View`
    justify-content: center;
`

export const Icon = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-left: 10px;
`

export const BankName = styled.View`
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
    color: ${(props) => props.theme.COLORS.BLUE};;
    font-weight: ${(props) => props.theme.FONT_WEIGHT.SM};
`