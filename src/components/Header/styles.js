import styled from "styled-components"
import { primaryColors, secondaryColors } from "../../constants/colors"
import { DMSansNav } from "../../constants/typography"

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => props.offset > 0 ? primaryColors.brandGreen : "transparent"};
    transition: all 0.2s ease-in-out;
`
export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
`
export const MenuItem = styled.li`
    font-size: ${ DMSansNav.default.fontSize };
    font-family: ${ DMSansNav.default.fontFamily };
    font-weight: ${ DMSansNav.default.fontWeight };
    color: ${props => props.offset > 0 ? primaryColors.brandGreenLight2 : primaryColors.brandGreen };
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    padding: 1.8rem 0;
        &:hover {
            font-size: ${ DMSansNav.active.fontSize };
            font-family: ${ DMSansNav.active.fontFamily };
            font-weight: ${ DMSansNav.active.fontWeight };
            color: ${props => props.offset > 0 ? primaryColors.brandGreenLight2 : primaryColors.brandGreen };
            border-bottom: 2px solid ${ props => props.offset > 0 ? primaryColors.brandBeige : primaryColors.brandGreen };
`