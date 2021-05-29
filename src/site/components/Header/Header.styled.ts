import styled from "styled-components";
import { colours, device, fonts } from "theme";

export const HeaderOuterContainer = styled.div`
  background-color: ${colours.blue200};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const HeaderContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  height: 98px;
  max-width: calc(1000px - 32px);
  width: calc(100% - 32px);
`;

export const SingleMenuContainer = styled.div`
  flex: 1;
`;

export const SingleMenu = styled.div`
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 16px 8px;
  white-space: pre;
  color: ${colours.white};
  text-decoration: none;
  font-size: ${fonts.size.large};

  &:hover {
    background-color: ${colours.blue100};
  }

  &:active {
    background-color: ${colours.white};

    color: ${colours.blue200};
  }
`;

export const SingleMenuIcon = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  margin: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: ${colours.white};
  }

  &:hover {
    background-color: ${colours.blue100};
  }

  &:active {
    background-color: ${colours.white};

    path {
      fill: ${colours.blue200};
    }
  }
`;

export const Logo = styled.div`
  height: 80px;
  width: 80px;
  cursor: pointer;
  margin: 0 192px 0 0;

  path {
    fill: ${colours.white};
  }

  @media ${device.laptop} {
    margin: 0 32px 0 0;
  }
`;

export const HeaderDesktopMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media ${device.mobile} {
    display: none;
  }
`;

export const HeaderMobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 130px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colours.blue300};
  z-index: 1000;
  padding: 32px 16px;

  ${SingleMenu} {
    margin: 16px 0;
  }

  @media ${device.mobile} {
    display: block;
  }
`;

export const HeaderMenuContainer = styled.div`
  display: none;
  flex: 1;
  justify-content: flex-end;

  @media ${device.mobile} {
    display: flex;
  }
`;

export const MenuContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: scale(1.4);

  path {
    fill: ${colours.white};
  }
`;
