export interface IRoundReducer {
  name: string;
}

export const reducer = (state: IRoundReducer, action) => {
  if (action.type === "edit") {
    return { ...state, ...action.data };
  }

  return state;
};
