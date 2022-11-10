import { DMSansHeading1, DMSansHeading2, DMSansHero } from "../../constants/typography";
import styled from "styled-components";

export const Heading = styled.h1`
    margin: 0;
    margin-bottom: ${props => props.mb ? props.mb + "px" : "0"};
    width: ${props => props.width ? props.width + "%" : "auto"};
    text-align: ${props => props.align ? props.align : "left"};
        &.hero {
            font-size: ${DMSansHero.fontSize};
            font-family: ${DMSansHero.fontFamily};
            font-weight: ${DMSansHero.fontWeight};
        }
        &.h1 {
            font-size: ${DMSansHeading1.fontSize};
            font-family: ${DMSansHeading1.fontFamily};
            font-weight: ${DMSansHeading1.fontWeight};
        }
        &.h2 {
            font-size: ${DMSansHeading2.fontSize};
            font-family: ${DMSansHeading2.fontFamily};
            font-weight: ${DMSansHeading2.fontWeight};
        }
`