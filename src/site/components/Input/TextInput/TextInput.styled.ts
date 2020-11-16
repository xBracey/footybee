import styled from "styled-components";
import { colours, fonts } from "theme";

export const TextInputContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  background-color: ${colours.grey100};
  border: none;
  display: block;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: ${fonts.size.medium};
  color: ${colours.black};
  font-family: ${fonts.family.roboto};
  border: 2px solid ${colours.grey300};
  transition: all 0.3s;

  &::placeholder {
    color: ${colours.grey300};
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: ${colours.blue050};
  }
`;
