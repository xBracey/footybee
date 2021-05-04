import { isValidGroupMatch } from "./type";

describe("Test isValidgroupMatch", () => {
  it("Valid", async done => {
    const validGroupMatch = isValidGroupMatch({
      date: "2020-01-01",
      homeGoals: 1,
      awayGoals: 1,
      homeTeam: "Test Team",
      awayTeam: "Test Team 2",
      groupLetter: "Test Group 1",
    });
    expect(validGroupMatch).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validGroupMatch = isValidGroupMatch({
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
    });

    expect(validGroupMatch).toBe(false);
    done();
  });
});
