import styled from "styled-components";
import { colours, fonts } from "theme";

export const InputLabel = styled.label`
  margin: 5px 0;
  color: ${colours.blue200};
  font-size: ${fonts.size.small};
  font-weight: 600;
`;

export const customMenuStyle = {
  menu: provided => ({
    ...provided,
    zIndex: 100,
  }),
  container: provided => ({
    ...provided,
    width: "242px",
    marginBottom: "20px",
  }),
};

export const EditFlex = styled.div`
  display: flex;
`;

export const EditFlexOne = styled.div`
  flex: 1;
  padding: 8px;

  ${InputLabel} {
    display: block;
    text-align: center;
  }
`;
