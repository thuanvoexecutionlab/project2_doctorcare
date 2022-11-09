import styled from 'styled-components'
import { primaryColors, secondaryColors } from '../../constants/colors'
import { DMSansButton } from '../../constants/typography'

export const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    border: 1px solid ${props =>props.offset>0? secondaryColors.white : primaryColors.brandGreen};
    border-radius: 40px;
    gap: 16px;
    font-size: ${DMSansButton.fontSize};
    font-family: ${DMSansButton.fontFamily};
    font-weight: ${DMSansButton.fontWeight};
    text-transform: uppercase;
    color: ${props => props.offset > 0 ? secondaryColors.white : primaryColors.brandGreen};
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${props => props.offset > 0 ? secondaryColors.white : primaryColors.brandGreen};
        color: ${props => props.offset > 0 ? primaryColors.brandGreen : secondaryColors.white};
`

export const ButtonIcon = (props) => {
    const { icon } = props
    return (
        <Button>

        </Button>
    )
}
