import styled from "styled-components";
import { colours } from "theme";

export const LoginSidebarContainer = styled.div`
  width: 30%;
  max-width: 350px;
  background-color: ${colours.yellow200};
  padding: 50px;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 0px;
`;

export const PredictorText = styled.h3`
  margin: 10px;
  text-align: center;
  font-weight: 500;
`;

export const SidebarInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SidebarInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  svg {
    min-height: 50px;
    min-width: 50px;
  }
`;

export const SidebarInfoText = styled.p`
  margin: 0 0 0 20px;
`;

export const SidebarMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const SidebarMenu = styled.p`
  margin: 0 auto;
  text-decoration: underline;
  cursor: pointer;
  color: ${colours.black};
  border-radius: 4px;
  padding: 6px 12px;
  margin: -4px;

  &:hover {
    background-color: ${colours.yellow300};
  }

  &:active {
    background-color: ${colours.black};

    color: ${colours.yellow300};
  }
`;
