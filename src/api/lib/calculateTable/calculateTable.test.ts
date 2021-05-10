import IGroupMatch from "../../models/GroupMatch/type";
import { calculateTable } from "./calculateTable";

const groupMatchBase = {
  date: new Date("2020-01-01"),
  groupLetter: "1",
};

describe("Test calculate table", () => {
  it("Valid table (just points)", () => {
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
        homeTeam: "C",
        awayTeam: "D",
        homeGoals: 0,
        awayGoals: 2,
      },
      {
        ...groupMatchBase,
        homeTeam: "A",
        awayTeam: "C",
        homeGoals: 3,
        awayGoals: 1,
      },
      {
        ...groupMatchBase,
        homeTeam: "B",
        awayTeam: "D",
        homeGoals: 1,
        awayGoals: 1,
      },
    ];

    const table = calculateTable(groupMatches);

    expect(table).toEqual([
      {
        name: "A",
        played: 2,
        wins: 2,
        draws: 0,
        losses: 0,
        goalsFor: 5,
        goalsAgainst: 2,
        goalDifference: 3,
        points: 6,
      },
      {
        name: "D",
        played: 2,
        wins: 1,
        draws: 1,
        losses: 0,
        goalsFor: 3,
        goalsAgainst: 1,
        goalDifference: 2,
        points: 4,
      },
      {
        name: "B",
        played: 2,
        draws: 1,
        wins: 0,
        losses: 1,
        goalsFor: 2,
        goalsAgainst: 3,
        goalDifference: -1,
        points: 1,
      },
      {
        name: "C",
        played: 2,
        wins: 0,
        draws: 0,
        losses: 2,
        goalsFor: 1,
        goalsAgainst: 5,
        goalDifference: -4,
        points: 0,
      },
    ]);
  });
});
