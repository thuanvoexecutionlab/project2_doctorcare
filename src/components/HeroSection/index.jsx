import React from 'react'
import { HeatText } from '../HeatText'
import { Content, HeroTitle, Image, InnerWrapper, Subtitle, WrapImg, Wrapper } from './styles'

export default function HeroSection() {
    return (
        <Wrapper>
            <InnerWrapper>
                <Content>
                    <HeatText mb={"16px"}>BOAS-VINDAS A DOCTORCARE 👋</HeatText>
                    <HeroTitle>Assistência médica simplificada para todos</HeroTitle>
                    <Subtitle>Os médicos da DoctorCare vão além
                        dos sintomas para tratar a causa raiz
                        de sua doença e proporcionar uma cura a
                        longo prazo.
                    </Subtitle>
                </Content>
                <WrapImg>
                    <Image src="./images/customer1.png" alt="hero" />
                </WrapImg>
            </InnerWrapper>
        </Wrapper>
    )
}
