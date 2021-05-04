export interface IGroupMatchReducer {
  homeTeam: string;
  awayTeam: string;
  homeTeamGoals: string;
  awayTeamGoals: string;
}

export const reducer = (state: IGroupMatchReducer, action) => {
  if (action.type === "edit") {
    return { ...state, ...action.data };
  }

  return state;
};
