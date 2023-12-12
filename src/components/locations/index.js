import React, { useContext } from 'react'
import { ThemeContext } from "../../context/themeContext";
import { Background } from '../base/common'
import { StyledCard } from '../base/card'
import { VerticalSpace, Box } from '../base/common'
import styled from 'styled-components'

const Title = styled.div`
    position: Relative;
    color: ${props => props.theme.textPrimary};
    font-size: 24px;
    margin: auto;
    width: fit-content;
    margin-top: 100px;
`

const FormCard = ({ onLocationClick, show }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Background show={show}>
            <Title theme={theme} >
                Select Your Location
            </Title>
            <StyledCard>
                <Box theme={theme} onClick={() => onLocationClick(1)}>Loacation 1</Box>
                <Box theme={theme} onClick={() => onLocationClick(2)}>Loacation 2</Box>
                <Box theme={theme} onClick={() => onLocationClick(3)}>Loacation 3</Box>
                <Box theme={theme} onClick={() => onLocationClick(4)}>Loacation 4</Box>
                <Box theme={theme} onClick={() => onLocationClick(5)}>Loacation 5</Box>
            </StyledCard>
        </Background>
    )
}

export default FormCard

