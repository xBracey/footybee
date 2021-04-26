export interface IGroupReducer {
  letter: string;
}

export const reducer = (state: IGroupReducer, action) => {
  if (action.type === "edit") {
    return { ...state, ...action.data };
  }

  return state;
};
