import React, {
  ChangeEvent,
  FocusEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Input,
  TextInputOuterContainer,
  TextInputContainer,
  TextInputError,
} from "./TextInput.styled";

interface ITextInput {
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
  id?: string;
  type?: string;
  error?: string;
  onBlurHandler?: (event: FocusEvent) => void;
}

export const TextInput = ({
  text,
  setText,
  placeholder,
  id,
  type,
  error,
  onBlurHandler,
}: ITextInput) => {
  const errorMessageRef: RefObject<HTMLDivElement> = useRef();
  const [errorHeight, setErrorHeight] = useState(0);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    setErrorHeight(errorMessageRef.current.clientHeight);
  }, [error]);

  return (
    <TextInputOuterContainer>
      <TextInputContainer errorHeight={error ? errorHeight : 0}>
        <TextInputError isVisible={!!error} ref={errorMessageRef}>
          {error}
        </TextInputError>
        <Input
          onChange={onChange}
          value={text}
          type={type ?? "text"}
          placeholder={placeholder}
          id={id}
          onBlur={onBlurHandler}
        />
      </TextInputContainer>
    </TextInputOuterContainer>
  );
};
