import validator from "validator";

const notNullOrUndefined = (data: any) => data !== null && data !== undefined;

export const checkBody = (body: object) => {
  return !!body && typeof body == "object";
};

export const validateArray = (data: any[], type: string) => {
  return (
    notNullOrUndefined(data) &&
    typeof data == "object" &&
    data.length &&
    data.every(singleData => typeof singleData === type)
  );
};

export const validateArrayTypeCheck = (data: any[], typeCheck: Function) => {
  return (
    notNullOrUndefined(data) &&
    typeof data == "object" &&
    data.length &&
    data.every(singleData => typeCheck(singleData))
  );
};

export const validateType = (data: any, type: string, required: boolean) => {
  if (required) {
    return notNullOrUndefined(data) && typeof data == type;
  } else {
    return (notNullOrUndefined(data) && typeof data == type) || !data;
  }
};

export const validateBoolean = (data: any, required: boolean) => {
  if (required) {
    return data === true || data === false;
  } else {
    return data === true || data === false || !data;
  }
};

export const validateDate = (data: string, required: boolean) => {
  if (required) {
    return notNullOrUndefined(data) && validator.isISO8601(data);
  } else {
    return (notNullOrUndefined(data) && validator.isISO8601(data)) || !data;
  }
};

export const validateOneExists = (data: any[]) => {
  return data.some(value => value);
};
