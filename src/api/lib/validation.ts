import validator from "validator";

export const validateString = (data: string, required: boolean) => {
  if (required) {
    return !!data && typeof data === "string";
  } else {
    return (!!data && typeof data === "string") || !data;
  }
};

export const validateDate = (data: string, required: boolean) => {
  if (required) {
    return !!data && validator.isISO8601(data);
  } else {
    return (!!data && validator.isISO8601(data)) || !data;
  }
};

export const validateNumber = (data: number, required: boolean) => {
  if (required) {
    return !!data && typeof data === "number";
  } else {
    return (!!data && typeof data === "number") || !data;
  }
};
