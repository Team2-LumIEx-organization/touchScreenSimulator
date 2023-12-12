import React, { useContext, useState } from 'react'
import { ThemeContext } from "../../context/themeContext";
import { Background } from '../../components/base/common'
import { StyledModalWrapper } from '../../components/base/card'
import Input from '../../components/base/input'
import { VerticalSpace } from '../../components/base/common'
import Button from '../../components/base/button'
import styled from 'styled-components'
import Modal from '../base/modal'
import MainContext from "../../MainContext";
import axios from 'axios'

const Title = styled.div`
    position: Relative;
    color: ${props => props.theme.textPrimary};
    font-size: 24px;
    margin-bottom: 72px;
`

const FormCard = ({ toggleCheckPasswordModal, checkPasswordModal, selectedCabinent, seLectedLocation }) => {
    const { theme } = useContext(ThemeContext);
    const [password, setPassword] = useState('')
    const { updateToasterContext } = useContext(MainContext).toasters;
    
    const onChange = (key, value) => {
        if (key === "password") {
            setPassword(value)
        }
    }
    
    const onClick = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API}/location/unlock`,{
                cabinentId: selectedCabinent, locationId: seLectedLocation, key: password 
            })
            updateToasterContext({
                type: 'success',
                message: 'The cabinent Unlocked Successfully'
            })
            
        } catch {
            updateToasterContext({
                type: 'error',
                message: 'You entered a wrong key'
            })
        } finally {
            toggleCheckPasswordModal()
            setPassword('')
        }
    }

    return (
        <Modal open={checkPasswordModal} toggle={toggleCheckPasswordModal}>
            <StyledModalWrapper>
                <Title theme={theme} >
                    Enter The key to open the Cabinent
                </Title>
                <VerticalSpace height={50} />
                <Input
                    placeholder="Password"
                    onChange={onChange}
                    inputTarget="password"
                    value={password}
                    size='full'
                    validate={true}
                    type="password"
                />
                <VerticalSpace height={50} />
                <Button
                    text="Open Cabinent"
                    onClick={onClick}
                />
            </StyledModalWrapper>
        </Modal>
    )
}

export default FormCard

