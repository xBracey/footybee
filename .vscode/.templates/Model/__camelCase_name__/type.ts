export default interface I{{camelCase name}} {}

export const isValid{{camelCase name}} = (data: any): data is I{{camelCase name}} => {
    if (!data || typeof data !== "object") {
      return false;
    }
};
  
