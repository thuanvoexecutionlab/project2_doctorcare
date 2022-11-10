import styled from "styled-components";
import { secondaryColors } from "../../constants/colors";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${secondaryColors.white};
    position: relative;
`
export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    gap: 65px;
`
export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
export const Wrap = styled.div`
    display: flex;
    flex: 1;
`
export const Image = styled.img`
    width: 100%;
`


