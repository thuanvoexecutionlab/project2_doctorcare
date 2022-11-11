import React from 'react'
import { FiFacebook, FiInstagram, FiX, FiYoutube } from 'react-icons/fi';
import { HashLink } from 'react-router-hash-link';
import { useStore } from '../../provider';
import { TOGGLE_DRAWER } from '../../provider/constants';
import { Button } from '../Button';
import { Content, InnerWrapper, Logo, Menu, MenuItem, Wrap, Wrapper } from './styles'

export default function Drawer() {
    const [state, dispatch] = useStore();

    const handleClick = () => {
        //open close here
        dispatch({ type: TOGGLE_DRAWER, payload: true });
        //turn on scroll
        document.body.style.overflow = 'unset';
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
                    <HashLink onClick={() => handleClick()} smooth to="#home">
                        <MenuItem id='menuHomeMobile'>Início</MenuItem>
                    </HashLink>
                    <HashLink onClick={() => handleClick()} smooth to="#about">
                        <MenuItem id='menuAboutMobile'>Sobre</MenuItem>
                    </HashLink>
                    <HashLink onClick={() => handleClick()} smooth to="#services">
                        <MenuItem id='menuServicesMobile'>Serviços</MenuItem>
                    </HashLink>
                    <HashLink onClick={() => handleClick()} smooth to="#depositions">
                        <MenuItem id='menuDepositionsMobile'>Depoimentos</MenuItem>
                    </HashLink>

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
