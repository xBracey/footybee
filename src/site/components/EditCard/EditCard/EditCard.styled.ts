import { SelectInputContainer } from "components/Input/SelectInput/SelectInput.styled";
import styled from "styled-components";
import { colours } from "theme";

export const EditCardContainer = styled.form`
  background-color: ${colours.white};
  width: 460px;
  border-radius: 6px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  position: relative;
  padding: 20px 40px;

  ${SelectInputContainer} {
    padding-bottom: 40px;
  }
`;

export const EditCardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EditCardButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const EditCardTitle = styled.h2`
  text-align: center;
  color: ${colours.blue200};
  margin: 10px 0 20px;
`;
