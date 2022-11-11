import styled from "styled-components";
import { primaryColors, secondaryColors } from "../../constants/colors";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 40vh;
    background-color: ${primaryColors.brandGreenLight2};
    @media (max-width: 1200px) {
        padding-top: 50vh;
    }
`
export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    @media (max-width: 1200px) {
        width: 90%;
    }
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    width: 100%;
    margin-bottom: 25vh;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 24px;
    background-color: ${secondaryColors.white};
    border: 1px solid ${primaryColors.brandGreenLight};
    border-radius: 6px;
    .icon {
        padding: 6px;
        background-color: ${primaryColors.brandGreenLight};
        color: ${primaryColors.brandGreen};
        border-radius: 100px;
    }
`




