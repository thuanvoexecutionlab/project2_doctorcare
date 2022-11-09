import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import { InnerWrapper, Menu, MenuItem, Wrapper } from './styles'

export default function Header() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <Wrapper offset={offset}>
            <InnerWrapper>
                <img src={offset>0?"./images/logo2.svg":"./images/logo1.svg"} alt="logo" />
                <Menu>
                    <MenuItem offset={offset}>Início</MenuItem>
                    <MenuItem offset={offset}>Sobre</MenuItem>
                    <MenuItem offset={offset}>Serviços</MenuItem>
                    <MenuItem offset={offset}>Depoimentos</MenuItem>
                </Menu>
                <Button offset={offset}><span>Agendar consulta</span></Button>
            </InnerWrapper>
        </Wrapper>
    )
}
