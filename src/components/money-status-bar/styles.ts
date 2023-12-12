import styled from 'styled-components/native';

export type StatusBarTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: StatusBarTypeStyleProps;
}


export const Container = styled.View `
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 10px;
`

export const AmountStatus = styled.View <Props>`
    width: 7px;
    height: 68px;
    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 
    : theme.COLORS.RED_DARK};

    border-radius: 50px;
    margin-top: 5px;
    margin-left: 10px;

`