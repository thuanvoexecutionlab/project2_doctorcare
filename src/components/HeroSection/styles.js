import styled from "styled-components";
import { primaryColors, secondaryColors } from "../../constants/colors";
import { DMSansHero, DMSansSubtitle } from "../../constants/typography";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 10vh;
    background-color: ${primaryColors.brandGreenLight};
`
export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    gap: 60px;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
`

export const WrapImg = styled.div`
    width: 75%;
`
export const Image = styled.img`
    width: 100%;
`
export const HeroTitle = styled.h1`
    font-size: ${DMSansHero.fontSize};
    font-family: ${DMSansHero.fontFamily};
    font-weight: ${DMSansHero.fontWeight};
    color: ${secondaryColors.grayHeadline};
    margin: 0;
    margin-bottom: 24px;
`
export const Subtitle = styled.h2`
    font-size: ${DMSansSubtitle.fontSize};
    font-family: ${DMSansSubtitle.fontFamily};
    font-weight: ${DMSansSubtitle.fontWeight};
    color: ${secondaryColors.grayParagraph};
    margin: 0;
    margin-bottom: 32px;
`