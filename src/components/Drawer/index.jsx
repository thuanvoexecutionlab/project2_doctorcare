import React from 'react'
import { FiFacebook, FiInstagram, FiX, FiYoutube } from 'react-icons/fi';
import { useStore } from '../../provider';
import { TOGGLE_DRAWER } from '../../provider/constants';
import { Button } from '../Button';
import { Content, InnerWrapper, Logo, Menu, MenuItem, Wrap, Wrapper } from './styles'

export default function Drawer() {
    const [state, dispatch] = useStore();

    const handleClick = () => {
        //open close here
        dispatch({ type: TOGGLE_DRAWER, payload: true });
    }
    return (
        <Wrapper hidden={state.drawer}>
            <InnerWrapper>
                <Logo>
                    <img src={"./images/logo2.svg"} alt="logo" />
                    <FiX
                        onClick={() => handleClick()}
                        className='icon'
                    />
                </Logo>
                <Menu>
                    <MenuItem >Início</MenuItem>
                    <MenuItem >Sobre</MenuItem>
                    <MenuItem >Serviços</MenuItem>
                    <MenuItem >Depoimentos</MenuItem>
                </Menu>
                <Wrap>
                    <Button secondary>Agende sua consulta</Button>
                </Wrap>
                <Content>
                    <FiInstagram className='icon' />
                    <FiFacebook className='icon' />
                    <FiYoutube className='icon' />
                </Content>
            </InnerWrapper>
        </Wrapper>
    )
}
