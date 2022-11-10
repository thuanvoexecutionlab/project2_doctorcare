import styled from "styled-components";
import { primaryColors, secondaryColors } from "../../constants/colors";
import { DMSansText } from "../../constants/typography";

export const Text = styled.div`
     display: flex;
     align-items: center;
     gap: 8px;
     font-size: ${DMSansText.fontSize};
     font-family: ${DMSansText.fontFamily};
     font-weight: ${DMSansText.fontWeight};
     color: ${props => props.primary ? primaryColors.brandGreen : secondaryColors.grayParagraph};
     margin: 0;
     margin-bottom: ${props => props.mb ? props.mb + "px" : "0"};
     &.mini {
          font-size: 14px;
          font-family: ${DMSansText.fontFamily};
          font-weight: ${DMSansText.fontWeight};
          color: ${primaryColors.brandBeige};
     }
     .icon {
          width: 24px;
          height: 24px;
          color: ${primaryColors.brandGreen};
     }
`
