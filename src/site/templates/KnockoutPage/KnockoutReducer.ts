import { IKnockoutMatch } from "src/site/redux/reducers/knockoutMatches";

const initialiseMatches = (num: number) =>
  Array(num)
    .fill(null)
    .map((value, index) => ({
      homeTeam: `W${(index + 1) * 2 - 1}`,
      awayTeam: `W${(index + 1) * 2}`,
      homeWin: null,
    }));

export const initialState = {
  "Round of 16": {
    matches: [],
  },
  "Quarter final": {
    matches: initialiseMatches(4),
  },
  "Semi final": {
    matches: initialiseMatches(2),
  },
  Final: {
    matches: initialiseMatches(1),
  },
  Winner: {
    matches: [],
  },
};

export interface IKnockoutRoundMatch {
  homeTeam: string;
  awayTeam: string;
  homeWin: boolean;
}

export interface IKnockoutRound {
  matches: IKnockoutRoundMatch[];
}

export interface IKnockoutReducer {
  "Round of 16": IKnockoutRound;
  "Quarter final": IKnockoutRound;
  "Semi final": IKnockoutRound;
  Final: IKnockoutRound;
  Winner: IKnockoutRound;
}

const roundRankings = [
  "Round of 16",
  "Quarter final",
  "Semi final",
  "Final",
  "Winner",
];

const changeMatch = (
  state: IKnockoutReducer,
  homeWin: boolean,
  roundName: string,
  index: number
): IKnockoutReducer => {
  // Set home win
  const round: IKnockoutRound = state[roundName];
  const game = round.matches[index];
  game.homeWin = homeWin;

  // Set losing team to round
  const winningTeam = homeWin ? game.homeTeam : game.awayTeam;

  // Add winning team to next round
  const nextRoundRanking = roundRankings.indexOf(roundName) + 1;
  const nextRoundName = roundRankings[nextRoundRanking];
  const nextRound: IKnockoutRound = state[nextRoundName];

  if (roundName !== "Final") {
    const nextRoundGame = nextRound.matches[Math.floor(index / 2)];

    if (index % 2 === 0) {
      nextRoundGame.homeTeam = winningTeam;
    } else {
      nextRoundGame.awayTeam = winningTeam;
    }

    if (nextRoundGame.homeWin !== null) {
      return changeMatch(
        {
          ...state,
          [roundName]: round,
          [nextRoundName]: nextRound,
        },
        nextRoundGame.homeWin,
        nextRoundName,
        Math.floor(index / 2)
      );
    }
  }

  return {
    ...state,
    [roundName]: round,
    [nextRoundName]: nextRound,
  };
};

export const reducer = (state: IKnockoutReducer, action) => {
  if (action.type === "initialise") {
    return {
      ...initialState,
      "Round of 16": {
        teamNames: [],
        ...action.data,
      },
    };
  }

  if (action.type === "match") {
    const { homeWin, roundName, index } = action.data;

    return changeMatch(state, homeWin, roundName, index);
  }

  return state;
};
