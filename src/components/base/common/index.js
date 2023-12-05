import styled from 'styled-components'
import React, { useContext } from 'react'
import { ThemeContext } from "../../../context/themeContext";


export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const VerticalSpace = styled.div`
    height: ${propes => propes.height + 'px'}
`

export const HorizentalSpace = styled.div`
    width: ${propes => propes.width + 'px'}
`

const Wrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: ${props => props.show ? 'block' : 'none'};
    overflow-y: auto;
    transition: right 0.3s;
    background: ${props => props.theme ? props.theme.primaryBackground : 'black'};
`

export const Box = styled.div`
    position: relative;
    width: 400px;
    height: 230px;
    margin-top: 100px;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textPrimary};
    background: ${props => props.theme.cardBackground};
    border: ${props => `1px solid ${props.theme.cardBackground}`};
    border-radius: 40px;
    transition: 200ms ease-in-out;
    cursor: pointer;
    &:hover {
        border: ${props => `1px solid ${props.theme.redColorHover}`};
        color: ${props => props.theme.redColorHover};
    }
`

export const CabinentBox = styled(Box)`
    width: 260px;
    height: 100px;
    margin-top: 40px;
    border-radius: 20px;
`

const AuthorizedWrapper = styled.div`
    position: relative;
    width: 100VW;
    min-height: 100vh;
    padding-top: 80px;
    overflow-x: hidden;
    background: ${props => props.theme ? props.theme.primaryBackground : 'black'};
`

export function Background(props) {
    const { theme, toggleTheme, darkThemeSelected } = useContext(ThemeContext);

    return (
        <Wrapper theme={theme} show={props.show}>
            {props.children}
        </Wrapper>
    )
}


export function AuthorizedBackground(props) {
    const { theme, toggleTheme, darkThemeSelected } = useContext(ThemeContext);

    return (
        <AuthorizedWrapper theme={theme}>
            {props.children}
        </AuthorizedWrapper>
    )
}

