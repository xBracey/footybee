import { isValidKnockoutMatch } from "./type";

describe("Test isValidknockoutMatch", () => {
  it("Valid", async done => {
    const validKnockoutMatch = isValidKnockoutMatch({
      date: "2020-01-01",
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team",
      awayTeam: "Test Team 2",
      roundName: "Test Round 1",
      position: 1,
    });
    expect(validKnockoutMatch).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validKnockoutMatch = isValidKnockoutMatch({
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
    });

    expect(validKnockoutMatch).toBe(false);
    done();
  });
});
