import { calculateGroup, IGroupTeams } from "./calculateGroup";
import IGroupMatch from "../../models/GroupMatch/type";

const groupMatchBase = {
  date: new Date("2020-01-01"),
  groupLetter: "1",
};

describe("Test calculate group", () => {
  it("Valid group", () => {
    const groupMatches: IGroupMatch[] = [
      {
        ...groupMatchBase,
        homeTeam: "A",
        awayTeam: "B",
        homeGoals: 2,
        awayGoals: 1,
      },
    ];

    const groups: IGroupTeams = calculateGroup(groupMatches);

    expect(groups).toEqual({
      A: {
        name: "A",
        played: 1,
        wins: 1,
        draws: 0,
        losses: 0,
        goalsFor: 2,
        goalsAgainst: 1,
        goalDifference: 1,
        points: 3,
      },
      B: {
        name: "B",
        played: 1,
        wins: 0,
        draws: 0,
        losses: 1,
        goalsFor: 1,
        goalsAgainst: 2,
        goalDifference: -1,
        points: 0,
      },
    });
  });

  it("Valid group with invalid match", () => {
    const groupMatches: IGroupMatch[] = [
      {
        ...groupMatchBase,
        homeTeam: "A",
        awayTeam: "B",
        homeGoals: 2,
        awayGoals: 1,
      },
      {
        ...groupMatchBase,
        homeTeam: "B",
        awayTeam: "A",
        homeGoals: null,
        awayGoals: null,
      },
    ];

    const groups: IGroupTeams = calculateGroup(groupMatches);

    expect(groups).toEqual({
      A: {
        name: "A",
        played: 1,
        wins: 1,
        draws: 0,
        losses: 0,
        goalsFor: 2,
        goalsAgainst: 1,
        goalDifference: 1,
        points: 3,
      },
      B: {
        name: "B",
        played: 1,
        wins: 0,
        draws: 0,
        losses: 1,
        goalsFor: 1,
        goalsAgainst: 2,
        goalDifference: -1,
        points: 0,
      },
    });
  });
});
