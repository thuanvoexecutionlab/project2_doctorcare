import React from 'react'
import { Button } from '../Button'

import { BsWhatsapp } from 'react-icons/bs'
import { FiMail, FiMapPin } from "react-icons/fi";
import { Content, Image, InnerWrapper,  Wrap, Wrapper} from './styles'
import { Text } from '../Text'
import { Heading } from '../Heading'

export default function ContactSection() {
    
    return (
        <Wrapper>
            <InnerWrapper>
                <Content>
                    <Heading mb={40} className={"h1"} width={65} align={"left"}>Entre em contato com a gente!</Heading>
                    <Text mb={16}>
                        <FiMapPin className='icon'/>
                        <span>R. Amauri Souza, 346 </span>
                    </Text>
                    <Text mb={40}>
                        <FiMail className='icon'/>
                        <span>contato@doctorcare.com</span>
                    </Text>
                    <Wrap>
                        <Button primary >
                            <BsWhatsapp className={"icon"} />
                            <span>Agende sua consulta</span>
                        </Button>
                    </Wrap>
                </Content>
                <Wrap>
                    <Image src="./images/customer3.png" alt="hero" />
                </Wrap>
            </InnerWrapper>
            
        </Wrapper>
    )
}
