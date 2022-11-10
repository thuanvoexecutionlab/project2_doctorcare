import React from 'react'

import { HeatText } from '../HeatText'
import { Content, Image, InnerWrapper, Wrap, Wrapper } from './styles'
import { Text } from '../Text'
import { Heading } from '../Heading'
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'

export default function Footer() {

    return (
        <Wrapper>
            <InnerWrapper>
                <Wrap>
                    <Image src="./images/logo2.svg" alt="hero" />
                    <Text className={"mini"}>©2022 - DoctorCare.</Text>
                    <Text className={"mini"}>Todos os direitos reservados.</Text>
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
