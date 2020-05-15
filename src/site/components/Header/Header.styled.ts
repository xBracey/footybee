import styled from "styled-components";
import { COLORS, Container } from "../../lib/constants";

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  background-color: ${COLORS.BLUE};
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  color: ${COLORS.WHITE};
  margin: 0px 50px 0px 25px;
`;
