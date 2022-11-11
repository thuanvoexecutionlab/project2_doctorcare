import styled from "styled-components";
import { primaryColors } from "../../constants/colors";

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5vh 0;
    background-color: ${primaryColors.brandGreen};
`
export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    gap: 60%;
    @media (max-width: 1200px) {
        align-items: flex-start;
        width: 90%;
        gap: 4vh;
        flex-direction: column;
    }
`
export const Content = styled.div`
    display: flex;
    flex: 1;
    gap: 40px;
    .icon {
        width: 24px;
        height: 24px;
        color: ${primaryColors.brandBeige};
    }
`
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    flex:  1;
`
export const Image = styled.img`
    width: 100%;
    margin-bottom: 24px;
`




