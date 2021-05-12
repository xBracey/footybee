import { isValidGroupMatchPrediction } from "./type";

describe("Test isValidgroupMatchPrediction", () => {
  it("Valid", async done => {
    const validGroupMatchPrediction = isValidGroupMatchPrediction({
      username: "test",
      groupMatchId: "test",
      homeGoals: 0,
      awayGoals: 0,
    });
    expect(validGroupMatchPrediction).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validGroupMatchPrediction = isValidGroupMatchPrediction({});

    expect(validGroupMatchPrediction).toBe(false);
    done();
  });
});
