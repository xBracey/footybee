import styled from "styled-components";
import { colours, fonts } from "theme";

export const DateInputContainer = styled.div`
  .react-datepicker-popper {
    z-index: 20;
  }

  .react-datepicker__input-container {
    input {
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
      pointer-events: ${props => (props.isDisabled ? "none" : "auto")};

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
    }
  }
`;
