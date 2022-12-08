export interface IPlayerReducer {
  teamName: string;
  name: string;
  goals: string;
}

export const reducer = (state: IPlayerReducer, action) => {
  if (action.type === "edit") {
    return { ...state, ...action.data };
  }

  return state;
};
