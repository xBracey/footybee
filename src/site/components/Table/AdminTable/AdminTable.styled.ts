import { ButtonContainer } from "components/Button/Button.styled";
import styled from "styled-components";
import { colours, fonts } from "theme";

export const AdminTableContainer = styled.table`
  color: ${colours.white};
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 0 3px ${colours.blue200}; /* this draws the table border  */
`;

export const AdminHead = styled.thead``;

export const AdminBody = styled.tbody``;

export const AdminHeader = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: ${fonts.size.header3};
  font-weight: 400;

  svg {
    margin-left: 8px;
    height: 16px;
    width: 16px;
    fill: ${colours.white};
  }
`;

export const AdminHeaderRow = styled.tr`
  background-color: ${colours.blue200};
`;

export const AdminRow = styled.tr`
  &:nth-child(2n + 1) {
    color: ${colours.black};
    background-color: ${colours.yellow200};
  }
  &:nth-child(2n) {
    color: ${colours.black};
    background-color: ${colours.white};
  }
`;

export const AdminCell = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${ButtonContainer} {
    padding: 4px 8px;
  }
`;
