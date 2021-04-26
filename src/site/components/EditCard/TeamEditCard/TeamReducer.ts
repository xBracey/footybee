export interface ITeamReducer {
  groupLetter: string;
  name: string;
}

export const reducer = (state: ITeamReducer, action) => {
  if (action.type === "edit") {
    return { ...state, ...action.data };
  }

  return state;
};
