import styled from "styled-components";
import { colours, fonts } from "theme";

export const OverviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colours.blue300};
  flex-direction: column;
  color: ${colours.white};
`;

export const OverviewInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 32px);
  padding: 0 50px;
  max-width: calc(600px - 32px);
`;

export const OverviewTitle = styled.h3`
  margin: 4px;
  text-align: center;
  font-weight: 300;
  font-size: ${fonts.size.header3};
`;

export const OverviewDescription = styled.p`
  margin: 4px;
  text-align: center;
  font-size: ${fonts.size.header2};
`;

export const OverviewFlex = styled.div`
  flex: 1;
  padding: 0 0 50px 0;

  &:nth-child(2) {
    ${OverviewTitle} {
      font-size: ${fonts.size.header2};
    }

    ${OverviewDescription} {
      font-size: ${fonts.size.header1};
    }
  }
`;

export const OverviewName = styled.h2`
  margin: 32px;
  text-align: center;
  font-weight: 300;
  font-size: ${fonts.size.header1};
`;
