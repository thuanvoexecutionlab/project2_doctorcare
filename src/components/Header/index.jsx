import React, { useEffect, useState } from 'react'
import { FiAlignRight } from 'react-icons/fi';
import {  useStore } from '../../provider';
import { TOGGLE_DRAWER } from '../../provider/constants';
import { Button } from '../Button'
import { InnerWrapper, Menu, MenuItem, Wrapper } from './styles'

export default function Header() {
    const [offset, setOffset] = useState(0);
    const  [state,dispatch] = useStore();

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        //open drawer here
        dispatch({ type: TOGGLE_DRAWER, payload: false });
    }
    return (
        <Wrapper hidden={state.drawer} offset={offset}>
            <InnerWrapper offset={offset}>
                <img src={offset > 0 ? "./images/logo2.svg" : "./images/logo1.svg"} alt="logo" />
                <Menu>
                    <MenuItem offset={offset}>Início</MenuItem>
                    <MenuItem offset={offset}>Sobre</MenuItem>
                    <MenuItem offset={offset}>Serviços</MenuItem>
                    <MenuItem offset={offset}>Depoimentos</MenuItem>
                </Menu>
                <Button onClick={() => handleClick()} desktop offset={offset}>
                    <span>Agendar consulta</span>
                </Button>

                <FiAlignRight
                    onClick={() => handleClick()}
                    className='icon'
                />
            </InnerWrapper>
        </Wrapper>
    )
}
