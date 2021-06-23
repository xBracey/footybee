import { AdminTableContainer } from "components/Table/AdminTable/AdminTable.styled";
import styled from "styled-components";

export const RoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${AdminTableContainer} {
    margin: 32px 0 0 0;
  }
`;
