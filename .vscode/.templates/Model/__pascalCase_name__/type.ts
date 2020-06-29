export default interface I{{pascalCase name}} {}

export const isValid{{pascalCase name}} = (data: any): data is I{{pascalCase name}} => {
    if (!data || typeof data !== "object") {
      return false;
    }
};
  
