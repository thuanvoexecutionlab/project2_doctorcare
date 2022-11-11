import styled from "styled-components"
import { primaryColors } from "../../constants/colors"
import { DMSansHeatText, DMSansNav } from "../../constants/typography"

export const Wrapper = styled.header`
    display: flex;
    align-items: flex-start;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${primaryColors.brandGreen};
    transition: all 0.2s ease-in-out;
    height: 100vh;
    z-index: 100;
    display: ${props => props.hidden ? "none" : "flex"};
`
export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;
    .icon {
        width: 24px;
        height: 24px;
        color: ${primaryColors.brandBeige};
    }
    margin-bottom: 60px;
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
`
export const MenuItem = styled.li`
    font-size: 24px;
    font-family: ${DMSansNav.default.fontFamily};
    font-weight: ${DMSansHeatText.fontWeight};
    color: ${primaryColors.brandBeige};
    padding-bottom: .5rem;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in-out;
        &:hover {
            font-size: 24px;
            font-family: ${DMSansNav.active.fontFamily};
            font-weight: ${DMSansNav.active.fontWeight};
            color: ${primaryColors.brandBeige};
            border-bottom: 2px solid ${primaryColors.brandBeige};
        }
`
export const Wrap = styled.div`
    display: flex;
    margin-bottom: 5rem;
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