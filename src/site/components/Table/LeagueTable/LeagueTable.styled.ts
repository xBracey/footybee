import styled, { css } from "styled-components";
import { colours, fonts } from "theme";

interface ITableCell {
  isName?: boolean;
  width?: number;
  notCentered?: boolean;
  paddingLeft?: number;
  paddingRight?: number;
}

interface ILeagueTableRow {
  isHighlighted?: boolean;
}

export const LeagueTableContainer = styled.div`
  background-color: ${colours.green300};
  border-radius: 4px;
  border: 3px solid ${colours.blue200};
  width: calc(100% - 48px);
  margin: 32px 24px;

  path {
    stroke: ${colours.blue200};
  }
`;

export const LeagueTableRow = styled.div<ILeagueTableRow>`
  display: flex;
  padding: 12px;
  position: relative;
  transition: all 0.2s;

  &:nth-child(2n + 1) {
    color: ${colours.white};
  }

  &:nth-child(2n) {
    background-color: ${colours.yellow200};
    color: ${colours.black};
  }

  ${props =>
    props.isHighlighted
      ? css`
          background-color: ${colours.black} !important;
          color: ${colours.white} !important;
        `
      : null}
`;

const TableCell = css`
  flex: ${props => {
    if (!props.width) return props.name ? 3 : 1;
    return "initial";
  }};
  font-size: ${fonts.size.small};
  justify-content: ${props => (props.notCentered ? "flex-start" : "center")};
  padding: 4px ${props => (props.paddingRight ? props.paddingRight : 4)}px 4px
    ${props => (props.paddingLeft ? props.paddingLeft : 4)}px;
  display: flex;
  align-items: center;
  min-height: 25px;
  text-align: center;
  width: ${props => (props.width ? `${props.width}px` : "initial")};
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
