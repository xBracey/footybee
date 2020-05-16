import styled from "styled-components";
import { COLORS } from "../../lib/constants";
import Select from "react-select";

export const customSelectStyles = {
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? COLORS.BLUE : COLORS.WHITE,
  }),
};

export const filterWidth = 350;

export const FiltersContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.DARK_BLUE};
  height: calc(100vh - 100px);
  width: ${props => (props.filter ? `${filterWidth}px` : "0px")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: 0.5s;
`;

export const SingleFilter = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px;
`;

export const FilterSelect = styled(Select)`
  width: calc(100% - 50px);
  margin: 25px;
`;

export const FilterHeader = styled.h2`
  color: ${COLORS.WHITE};
`;

export const GenerateGraphContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const GenerateGraphButton = styled.input`
  height: 70px;
  width: 250px;
  background-color: ${COLORS.BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.WHITE};
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  font-family: Roboto;
  border: none;
`;
