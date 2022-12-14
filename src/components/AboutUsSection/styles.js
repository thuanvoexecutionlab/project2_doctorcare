import styled from "styled-components";
import { primaryColors } from "../../constants/colors";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${primaryColors.brandBeige};
`
export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    gap: 65px;
    padding: 10vh 0;
    @media (max-width: 1200px) {
        gap: 10vh;
        width: 90%;
        flex-direction: column-reverse;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 7;
`
export const Wrap = styled.div`
    display: flex;
    flex: 6;
`
export const Image = styled.img`
    width: 100%;
`




