import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import { HeatText } from '../HeatText'
import { BsWhatsapp } from 'react-icons/bs'
import { Content, ContentNumber, Divider, DivNumber, HeroTitle, Image, InnerWrapper, Number, Subtitle, Wrap, Wrapper} from './styles'
import { Text } from '../Text'

export default function HeroSection() {
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        setHeight(elementRef.current.clientHeight);
    }, []); 

    console.log(height);

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
                    <Wrap>
                        <Button primary >
                            <BsWhatsapp className={"icon"} />
                            <span>Agende sua consulta</span>
                        </Button>
                    </Wrap>
                </Content>
                <Wrap>
                    <Image src="./images/customer1.png" alt="hero" />
                </Wrap>
            </InnerWrapper>
            <DivNumber ref={elementRef} bottom={height}>
                <ContentNumber>
                    <Number>+3.500</Number>
                    <Text primary>Pacientes atendidos</Text>
                </ContentNumber>
                <Divider />
                <ContentNumber>
                    <Number>+15</Number>
                    <Text>Especialistas disponíveis</Text>
                </ContentNumber>
                <Divider />
                <ContentNumber>
                    <Number>+10</Number>
                    <Text>Anos no mercado</Text>
                </ContentNumber>
            </DivNumber>
        </Wrapper>
    )
}
