import styled from "styled-components";
import { colours } from "theme";
import { LeagueTableRow } from "../LeagueTable/LeagueTable.styled";

export const LeaguesTableForwardButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 4px;

  svg {
    transform: rotate(180deg);
    padding: 4px;
    background-color: ${colours.blue300};
    border-radius: 50%;
    border: 4px solid ${colours.blue300};
    transition: all 0.2s;

    path {
      fill: ${colours.white};
    }
  }
`;

export const LeaguesTableRowWrapper = styled.span`
  cursor: pointer;

  &:hover {
    ${LeaguesTableForwardButton} {
      svg {
        background-color: ${colours.white};

        path {
          fill: ${colours.blue200};
        }
      }
    }
  }

  &:nth-child(2n + 1) {
    &:hover {
      ${LeagueTableRow} {
        background-color: ${colours.green200} !important;
      }
    }

    ${LeagueTableRow} {
      color: ${colours.white};
    }
  }

  &:nth-child(2n) {
    &:hover {
      ${LeagueTableRow} {
        background-color: ${colours.yellow100} !important;
      }
    }

    ${LeagueTableRow} {
      background-color: ${colours.yellow200};
      color: ${colours.black};
    }
  }
`;
