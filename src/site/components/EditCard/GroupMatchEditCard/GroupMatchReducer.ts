export interface IGroupMatchReducer {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeGoals: string;
  awayGoals: string;
}

export const reducer = (state: IGroupMatchReducer, action) => {
  if (action.type === "edit") {
    return { ...state, ...action.data };
  }

  return state;
};
