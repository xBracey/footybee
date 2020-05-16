import styled from "styled-components";
import { COLORS } from "../../lib/constants";
import { filterWidth } from "../Filters/Filters.styled";

interface IMainContainer {
  filter: boolean;
}

export const MainContainer = styled.div<IMainContainer>`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.WHITE};
  height: calc(100vh - 100px);
  width: ${props =>
    props.filter ? `calc(100vw - ${filterWidth}px)` : "100vw"};
  max-width: ${props => (props.filter ? `${1550 - filterWidth}px` : `1550px`)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
`;
