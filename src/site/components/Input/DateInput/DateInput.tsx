import React, { useState } from "react";
import { DateInputContainer } from "./DateInput.styled";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface IDateInput {
  date: Date;
  setDate: (date: Date) => void;
}

export const DateInput = ({ date, setDate }: IDateInput) => {
  return (
    <DateInputContainer>
      <DatePicker
        selected={date}
        onChange={setDate}
        locale="gb"
        dateFormat="dd/MM/yyyy HH:mm"
        showTimeSelect
      />
    </DateInputContainer>
  );
};
