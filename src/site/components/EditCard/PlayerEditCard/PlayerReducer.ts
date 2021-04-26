export interface IPlayerReducer {
  teamName: string;
  name: string;
}

export const reducer = (state: IPlayerReducer, action) => {
  if (action.type === "edit") {
    return { ...state, ...action.data };
  }

  return state;
};
