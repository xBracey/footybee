export interface ITextValidation {
  validation: (text: string) => boolean;
  message?: string;
  restrictsInput?: boolean;
}

export interface IMultiTextValidation {
  value: string;
  hasBlurred: boolean;
  validation: ITextValidation[];
}

export interface IValidate {
  errorMessages: string[];
  isDisabled: boolean;
}

export const findErrorMessage = (
  text: string,
  validation: ITextValidation[]
) => {
  let errorMessage = "";

  validation.forEach(singleValidation => {
    if (!singleValidation.validation(text) && !errorMessage) {
      errorMessage = singleValidation.message;
    }
  });

  return errorMessage;
};

export const validateInputs = (
  validation: IMultiTextValidation[]
): IValidate => {
  const validateArray = [];
  let isDisabled = false;

  validation.forEach((singleValidation, index) => {
    validateArray[index] = findErrorMessage(
      singleValidation.value,
      singleValidation.validation
    );

    if (validateArray[index] !== "") {
      isDisabled = true;
    }

    if (!singleValidation.hasBlurred) {
      validateArray[index] = "";
    }
  });

  return {
    errorMessages: validateArray,
    isDisabled,
  };
};

export const isMandatory: ITextValidation = {
  message: "This field is required",
  validation: (text: string) => text && !/^\s*$/.test(text),
};

export const isEmail: ITextValidation = {
  message: "Please enter a valid email",
  validation: (text: string) => text && /^.+@.+$/.test(text),
};

export const numberValidation: ITextValidation = {
  message: "Test Message",
  validation: (text: string) => /^[0-9]*$/g.test(text),
  restrictsInput: true,
};

export const isPasswordMatch = (password: string): ITextValidation => ({
  message: "Confirm Password does not match",
  validation: (text: string) => text === password,
  restrictsInput: true,
});
