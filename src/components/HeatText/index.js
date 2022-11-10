import styled from "styled-components"
import { primaryColors } from "../../constants/colors"
import { DMSansHeatText } from "../../constants/typography"

export const HeatText = styled.h3`
    font-size: ${DMSansHeatText.fontSize};
    font-family: ${DMSansHeatText.fontFamily};
    font-weight: ${DMSansHeatText.fontWeight};
    color: ${primaryColors.brandGreen};
    margin: 0;
    margin-bottom: ${props => props.mb ? props.mb + "px" : "0"};
    text-transform: uppercase;
`