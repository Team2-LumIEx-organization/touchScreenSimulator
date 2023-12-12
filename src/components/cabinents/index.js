import React, { useContext } from 'react'
import { ThemeContext } from "../../context/themeContext";
import { Background } from '../base/common'
import { StyledCard } from '../base/card'
import { VerticalSpace, CabinentBox } from '../base/common'
import styled from 'styled-components'

const Title = styled.div`
    position: Relative;
    color: ${props => props.theme.textPrimary};
    font-size: 24px;
    margin: auto;
    width: fit-content;
    margin-top: 100px;
`

const Text = styled.div`
    position: Relative;
    color: ${props => props.theme.textPrimary};
    font-size: 16px;
    margin: auto;
    width: fit-content;
    margin-top: 40px;
`

const Back = styled.div`
    position: Relative;
    color: ${props => props.theme.textSecondary};
    font-size: 14px;
    margin: auto;
    width: fit-content;
    margin-top: 10px;
    cursor: pointer;
    transition: 200ms ease-in-out;
    &:hover {
        color: ${props => props.theme.textPrimary};
    }
`

const FormCard = ({ onCabinentClick, show, onBackClick, seLectedLocation }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Background show={show}>
            <Title theme={theme} >
                Select Cabinent
            </Title>
            <Text theme={theme} >
                You Are at Location {seLectedLocation}
            </Text>
            <Back theme={theme} onClick={() => onBackClick(0)}>
                Back To Locations 
            </Back>
            <StyledCard>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(1)}>Cabinent 1</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(2)}>Cabinent 2</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(3)}>Cabinent 3</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(4)}>Cabinent 4</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(5)}>Cabinent 5</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(6)}>Cabinent 6</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(7)}>Cabinent 7</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(8)}>Cabinent 8</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(9)}>Cabinent 9</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(10)}>Cabinent 10</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(11)}>Cabinent 11</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(12)}>Cabinent 12</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(13)}>Cabinent 13</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(14)}>Cabinent 14</CabinentBox>
                <CabinentBox theme={theme} onClick={() => onCabinentClick(15)}>Cabinent 15</CabinentBox>
                
            </StyledCard>
        </Background>
    )
}

export default FormCard

