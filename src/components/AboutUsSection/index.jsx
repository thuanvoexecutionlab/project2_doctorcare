import React from 'react'

import { HeatText } from '../HeatText'
import { Content, Image, InnerWrapper, Wrap, Wrapper } from './styles'
import { Text } from '../Text'
import { Heading } from '../Heading'

export default function AboutUsSection() {

    return (
        <Wrapper id={"about"}>
            <InnerWrapper>
                <Wrap>
                    <Image src="./images/customer2.png" alt="hero" />
                </Wrap>
                <Content>
                    <HeatText mb={10}>SOBRE NÓS</HeatText>
                    <Heading mb={24} className={"h1"} width={65} align={"left"}>Entenda quem somos e por que existimos</Heading>
                    <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </Text>
                </Content>
            </InnerWrapper>

        </Wrapper>
    )
}
