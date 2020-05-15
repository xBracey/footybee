import styled from "styled-components";
import { COLORS } from "../../lib/constants";

export const FilterToggleContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.DARK_GREY};
  font-family: Roboto;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 125px;
  height: 50px;
  margin-left: 25px;
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${COLORS.DARK_BLUE};
  }

  &:checked + span:before {
    transform: translateX(70px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    left: 8px;
    bottom: 5px;
    background-color: ${COLORS.WHITE};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
