import styled from "styled-components";
import { COLORS } from "../../lib/constants";

export const filterWidth = 350;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.DARK_BLUE};
  height: calc(100vh - 100px);
  width: ${props => (props.filter ? `${filterWidth}px` : "0px")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: 0.5s;
`;
