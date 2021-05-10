import styled, { css } from "styled-components";
import { colours, device, fonts } from "theme";

interface ITableCell {
  name?: boolean;
}

export const LeagueTableContainer = styled.div`
  background-color: ${colours.green300};
  border-radius: 4px;
  border: 3px solid ${colours.blue200};
  width: 100%;
  margin: 16px;

  path {
    stroke: ${colours.blue200};
  }
`;

export const LeagueTableRow = styled.div`
  display: flex;
  padding: 12px;
  position: relative;

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
  justify-content: center;
  padding: 4px;
  display: flex;
  align-items: center;
  min-height: 25px;
  text-align: center;
`;

export const LeagueTableCell = styled.div<ITableCell>`
  ${TableCell}
`;

export const LeagueTableHeader = styled.div`
  display: flex;
  padding: 12px;
  font-weight: 600;
  background-color: ${colours.blue200};
  color: ${colours.white};
`;

export const LeagueTableHeaderCell = styled.div<ITableCell>`
  ${TableCell}
`;

export const LeagueTableSwap = styled.div`
  position: absolute;
  top: 50%;
  right: -32px;
  transform: translate(0, -50%);
  cursor: pointer;
`;
