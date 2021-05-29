import {
  ButtonContainer,
  ButtonOuterContainer,
} from "components/Button/Button.styled";
import styled from "styled-components";
import { colours, device, fonts } from "theme";
import { TextInputOuterContainer } from "../../Input/TextInput/TextInput.styled";

export const LoginCardContainer = styled.div`
  background-color: ${colours.white};
  width: 550px;
  border-radius: 6px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  position: relative;

  ${TextInputOuterContainer} {
    width: 100%;
  }

  @media ${device.laptop} {
    width: 100%;
    border-radius: 0px;
  }
`;

export const CardMain = styled.form`
  padding: 40px 75px;
  width: calc(100% - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    padding: 40px 20px;
    width: calc(100% - 40px);
  }
`;

export const CardSplitter = styled.div`
  margin: 20px 0;
  color: ${colours.blue200};
  width: 100%;
  height: 1px;
`;

export const CardHeader = styled.h1`
  margin: 5px 0 30px 0;
  color: ${colours.blue200};
  font-size: ${fonts.size.header1};
  font-weight: 600;
`;

export const CardLink = styled.div`
  margin: 12px 0;
  color: ${colours.blue200};
  font-size: ${fonts.size.large};
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.3s;
  padding: 8px;
  margin: 0 -8px;
  border-radius: 8px;

  &:hover {
    background-color: ${colours.grey100};
  }
`;

export const CardFooter = styled.div`
  background-color: ${colours.blue200};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${CardLink} {
    color: ${colours.white};
    margin: 0;

    &:hover {
      background-color: ${colours.blue100};
    }
  }
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 5px 0;

  ${ButtonOuterContainer} {
    padding: 0;

    ${ButtonContainer} {
      margin: 0;
      font-size: ${fonts.size.large};
    }
  }

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const DummySubmit = styled.input`
  display: none;
`;
