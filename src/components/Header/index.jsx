import React, { useEffect, useState } from 'react'
import { FiAlignRight } from 'react-icons/fi';
import { useStore } from '../../provider';
import { TOGGLE_DRAWER } from '../../provider/constants';
import { Button } from '../Button'
import { InnerWrapper, Menu, MenuItem, Wrapper } from './styles'
import { HashLink } from 'react-router-hash-link';

export default function Header() {
    const [offset, setOffset] = useState(0);
    const [state, dispatch] = useStore();

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('scroll', () => {
                const scroll = window.scrollY
                const element = document.getElementById('services')
                const elementOffset = element.offsetTop
                const elementHeight = element.offsetHeight
                const elementOffsetTop = elementOffset + elementHeight
                const menu = document.getElementById('menuServices')
                if (scroll > elementOffset && scroll < elementOffsetTop) {
                    menu.classList.add('active')
                } else {
                    menu.classList.remove('active')
                }
        })
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY
            const element = document.getElementById('home')
            const elementOffset = element.offsetTop
            const elementHeight = element.offsetHeight
            const elementOffsetTop = elementOffset + elementHeight
            const menu = document.getElementById('menuHome')
            if (scroll > elementOffset && scroll < elementOffsetTop) {
                menu.classList.add('active')
            } else {
                menu.classList.remove('active')
            }
        })
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY
            const element = document.getElementById('about')
            const elementOffset = element.offsetTop
            const elementHeight = element.offsetHeight
            const elementOffsetTop = elementOffset + elementHeight
            const menu = document.getElementById('menuAbout')
            if (scroll > elementOffset && scroll < elementOffsetTop) {
                menu.classList.add('active')
            } else {
                menu.classList.remove('active')
            }
        })
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY
            const element = document.getElementById('depositions')
            const elementOffset = element.offsetTop
            const elementHeight = element.offsetHeight
            const elementOffsetTop = elementOffset + elementHeight
            const menu = document.getElementById('menuDepositions')
            if (scroll > elementOffset && scroll < elementOffsetTop) {
                menu.classList.add('active')
            } else {
                menu.classList.remove('active')
            }
        })
        return () => window.removeEventListener('scroll', onScroll);

    }, []);

    const handleClick = () => {
        //open drawer here
        dispatch({ type: TOGGLE_DRAWER, payload: false });
        //turn off scroll
        document.body.style.overflow = 'hidden';
    }
    return (
        <Wrapper hidden={state.drawer} offset={offset}>
            <InnerWrapper offset={offset}>
                <img src={offset > 0 ? "./images/logo2.svg" : "./images/logo1.svg"} alt="logo" />
                <Menu>
                    <HashLink smooth to="#home">
                        <MenuItem offset={offset} id={"menuHome"}>Início</MenuItem>
                    </HashLink>
                    <HashLink smooth to="#about">
                        <MenuItem offset={offset} id={"menuAbout"}>Sobre</MenuItem>
                    </HashLink>
                    <HashLink smooth to="#services" >
                        <MenuItem offset={offset} id={"menuServices"}>Serviços</MenuItem>
                    </HashLink>
                    <HashLink smooth to="#depositions">
                        <MenuItem offset={offset} id={"menuDepositions"}>Depoimentos</MenuItem>
                    </HashLink>
                </Menu>
                <Button desktop offset={offset}>
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
