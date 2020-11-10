import React, { ChangeEvent } from "react";
import { Input, TextInputContainer } from "./TextInput.styled";

interface ITextInput {
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
  id?: string;
}

export const TextInput = ({ text, setText, placeholder, id }: ITextInput) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <TextInputContainer>
      <div>
        <Input
          onChange={onChange}
          value={text}
          type="text"
          placeholder={placeholder}
          id={id}
        />
      </div>
    </TextInputContainer>
  );
};
