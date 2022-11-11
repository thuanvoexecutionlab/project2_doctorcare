import React, { useEffect } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { listService } from '../../mock/list_service'
import { Heading } from '../Heading'
import { HeatText } from '../HeatText'
import { Text } from '../Text'
import { Card, Grid, InnerWrapper, Wrapper } from './styles'

export default function ServiceSection() {
    useEffect(() => {
        
    }, [])
    return (
        <Wrapper id={"services"}>
            <InnerWrapper>
                <HeatText mb={16}>Serviços</HeatText>
                <Heading className={"h1"} width={40} align={"center"} mb={64}>
                    Como podemos ajudá-lo a se sentir melhor?
                </Heading>
                <Grid>
                    {listService.map((item, index) => (
                        <Card key={index}>
                            <BsCheck2 className='icon'/>
                            <Heading className={"h2"} align={"left"}>{item.title}</Heading>
                            <Text>{item.description}</Text>
                        </Card>
                    ))}
                </Grid>
            </InnerWrapper>
        </Wrapper>
    )
}
