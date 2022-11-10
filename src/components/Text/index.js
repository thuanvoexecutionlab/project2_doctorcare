import styled from "styled-components";
import { primaryColors, secondaryColors } from "../../constants/colors";
import { DMSansText } from "../../constants/typography";

export const Text = styled.p`
     font-size: ${DMSansText.fontSize};
     font-family: ${DMSansText.fontFamily};
     font-weight: ${DMSansText.fontWeight};
     color: ${props => props.primary ? primaryColors.brandGreen : secondaryColors.grayParagraph};
     margin: 0;
`
