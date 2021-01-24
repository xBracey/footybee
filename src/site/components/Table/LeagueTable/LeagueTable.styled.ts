import styled, { css } from "styled-components";
import { colours, device, fonts } from "theme";

interface ILeagueTableCell {
  name?: boolean;
  right?: boolean;
  center?: boolean;
  hideMobile?: boolean;
  showMobile?: boolean;
}

export const LeagueTableContainer = styled.div`
  background-color: ${colours.green300};
  border-radius: 4px;
  border: 3px solid ${colours.blue200};
  width: 100%;
`;

export const LeagueTableRow = styled.div`
  display: flex;
  padding: 12px;

  &:nth-child(2n + 1) {
    color: ${colours.white};
  }

  &:nth-child(2n) {
    background-color: ${colours.yellow200};
    color: ${colours.black};
  }
`;

const TableCell = css`
  flex: ${props => (props.name ? 3 : 1)};
  font-size: ${fonts.size.small};
  justify-content: ${props =>
    props.right ? "flex-end" : props.center ? "center " : "flex-start"};
  padding: 4px;
  display: ${props => (props.hideMobile ? "none" : "flex")};
  align-items: center;
  min-height: 25px;

  @media ${device.laptop} {
    display: ${props => (props.showMobile ? "none" : "flex")};
  }
`;

export const LeagueTableCell = styled.div<ILeagueTableCell>`
  ${TableCell}
`;

export const LeagueTableHeader = styled.div`
  display: flex;
  padding: 12px;
  font-weight: 600;
  background-color: ${colours.blue200};
  color: ${colours.white};
`;

export const LeagueTableHeaderCell = styled.div<ILeagueTableCell>`
  ${TableCell}
`;

export const LeagueTableAtom = styled.div`
  flex: 1;
  text-align: center;
`;
