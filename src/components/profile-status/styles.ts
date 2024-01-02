import styled from 'styled-components/native';
import {theme} from '../../theme'

export const Container = styled.View`
    width: 100%;
    height: 20%;
    background-color: ${theme.COLORS.GREEN_400};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
export const ProfilePic = styled.View`
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: ${theme.COLORS.WHITE};
    border-radius: 50px;
`
export const WrappProfile = styled.View`
    justify-content: center;
    flex-direction: row;
`

export const Menssage = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
`
