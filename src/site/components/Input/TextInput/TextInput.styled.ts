import styled from "styled-components";
import { colours, fonts } from "theme";

interface ITextInputContainer {
  errorHeight: number;
}
interface ITextInputError {
  isVisible: boolean;
}

export const TextInputOuterContainer = styled.div`
  display: flex;
`;

export const TextInputContainer = styled.div<ITextInputContainer>`
  position: relative;
  transition: all 0.5s;
  flex: 1;
  padding-bottom: 40px;
`;

export const Input = styled.input`
  background-color: ${colours.grey100};
  border: none;
  display: block;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: ${fonts.size.medium};
  color: ${colours.black};
  font-family: ${fonts.family.roboto};
  border: 3px solid ${colours.grey300};
  transition: all 0.3s;
  position: relative;
  z-index: 10;
  width: calc(100% - 46px);

  :invalid {
    box-shadow: none;
  }

  &::placeholder {
    color: ${colours.grey300};
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: ${colours.blue050};
  }
`;

export const TextInputError = styled.div<ITextInputError>`
  min-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  border: 3px solid ${colours.grey300};
  border-top: none;
  font-size: ${fonts.size.small};
  background-color: ${colours.errorRed};
  color: ${colours.white};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 5;
  transition: all 0.5s;
  text-align: center;

  position: absolute;
  top: ${props => (props.isVisible ? 55 : 24)}px;
  left: 20px;
  right: 20px;
`;
