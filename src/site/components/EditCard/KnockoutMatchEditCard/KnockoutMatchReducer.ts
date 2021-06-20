export interface IKnockoutMatchReducer {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeGoals: string;
  awayGoals: string;
  homePenalties: string;
  awayPenalties: string;
}

export const reducer = (state: IKnockoutMatchReducer, action) => {
  if (action.type === "edit") {
    return { ...state, ...action.data };
  }

  return state;
};
