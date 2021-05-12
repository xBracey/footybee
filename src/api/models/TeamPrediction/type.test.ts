import { isValidTeamPrediction } from "./type";

describe("Test isValidteamPrediction", () => {
  it("Valid", async done => {
    const validTeamPrediction = isValidTeamPrediction({
      username: "test",
      teamName: "test",
      groupPosition: 1,
    });
    expect(validTeamPrediction).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validTeamPrediction = isValidTeamPrediction({});

    expect(validTeamPrediction).toBe(false);
    done();
  });
});
