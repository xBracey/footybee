import { EditCardContainer } from "components/EditCard/EditCard/EditCard.styled";
import styled from "styled-components";

export const AddTeamFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${EditCardContainer} {
    margin: 16px;
  }
`;
