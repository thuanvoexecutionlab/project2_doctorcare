import styled from "styled-components";
import { primaryColors, secondaryColors } from "../../constants/colors";
import { DMSansHero, DMSansSubtitle } from "../../constants/typography";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 15vh;
    padding-bottom: 10vh;
    background-color: ${primaryColors.brandGreenLight};
    position: relative;
`
export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    gap: 65px;
    @media (max-width: 1200px) {
        gap: 10vh;
        width: 90%;
        flex-direction: column;
    }
`
export const Content = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
`
export const Wrap = styled.div`
    display: flex;
    flex: 3;
    padding-right: 24px;
    @media (max-width: 1200px) {
        padding-right: 0;
        justify-content: center;
    }
`
export const Image = styled.img`
    width: 100%;
     @media (max-width: 1200px) {
        padding-bottom: 18vh;
    }
`
export const Subtitle = styled.h2`
    font-size: ${DMSansSubtitle.fontSize};
    font-family: ${DMSansSubtitle.fontFamily};
    font-weight: ${DMSansSubtitle.fontWeight};
    color: ${secondaryColors.grayParagraph};
    margin: 0;
    margin-bottom: 32px;
    @media (max-width: 1200px) {
        text-align: center;
    }
`
export const DivNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: ${props => (-props.bottom / 2) + "px"};
    gap: 100px;
    background-color: ${primaryColors.brandBeige};
    border: 1px solid ${primaryColors.brandGreenLight};
    padding: 60px 0;
    width: 80%;
    border-radius: 6px;
    @media (max-width: 1200px) {
        width: 90%;
        flex-direction: column;
        gap: 60px;
        padding: 40px 0;
    }
`
export const ContentNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
`
export const Number = styled.h3`
    font-size: 48px;
    font-family: ${DMSansHero.fontFamily};
    font-weight: ${DMSansHero.fontWeight};
    color: ${secondaryColors.grayHeadline};
    margin: 0;
`

export const Divider = styled.div`
    width: 1px;
    background-color: ${primaryColors.brandGreen};
    height: 100px;
    @media (max-width: 1200px) {
        display: none;
    }
`

