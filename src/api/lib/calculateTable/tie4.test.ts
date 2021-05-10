import IGroupMatch from "../../models/GroupMatch/type";
import { calculateTable } from "./calculateTable";

const groupMatchBase = {
  date: new Date("2020-01-01"),
  groupLetter: "1",
};

describe("Test tie4", () => {
  it("Valid table tie4 goal difference", () => {
    const groupMatches: IGroupMatch[] = [
      {
        ...groupMatchBase,
        homeTeam: "A",
        awayTeam: "B",
        homeGoals: 4,
        awayGoals: 0,
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
        homeGoals: 0,
        awayGoals: 1,
      },
      {
        ...groupMatchBase,
        homeTeam: "B",
        awayTeam: "D",
        homeGoals: 6,
        awayGoals: 0,
      },
    ];

    const table = calculateTable(groupMatches);

    expect(table).toEqual([
      {
        name: "A",
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 4,
        goalsAgainst: 1,
        goalDifference: 3,
        points: 3,
      },
      {
        name: "B",
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 6,
        goalsAgainst: 4,
        goalDifference: 2,
        points: 3,
      },
      {
        name: "C",
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 1,
        goalsAgainst: 2,
        goalDifference: -1,
        points: 3,
      },
      {
        name: "D",
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 2,
        goalsAgainst: 6,
        goalDifference: -4,
        points: 3,
      },
    ]);
  });

  it("Valid table tie4 goal scored top two", () => {
    const groupMatches: IGroupMatch[] = [
      {
        ...groupMatchBase,
        homeTeam: "A",
        awayTeam: "B",
        homeGoals: 4,
        awayGoals: 0,
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
        homeGoals: 0,
        awayGoals: 1,
      },
      {
        ...groupMatchBase,
        homeTeam: "B",
        awayTeam: "D",
        homeGoals: 7,
        awayGoals: 0,
      },
    ];

    const table = calculateTable(groupMatches);

    expect(table).toEqual([
      {
        name: "B",
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 7,
        goalsAgainst: 4,
        goalDifference: 3,
        points: 3,
      },
      {
        name: "A",
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 4,
        goalsAgainst: 1,
        goalDifference: 3,
        points: 3,
      },
      {
        name: "C",
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 1,
        goalsAgainst: 2,
        goalDifference: -1,
        points: 3,
      },
      {
        name: "D",
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 2,
        goalsAgainst: 7,
        goalDifference: -5,
        points: 3,
      },
    ]);
  });
});
