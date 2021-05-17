import {
  addGroupMatchPredictions,
  getGroupMatchPredictions,
} from "../../services";

describe("Get groupMatchPredictions", () => {
  it("Valid groupMatchPredictions name", async done => {
    const { groupMatchPredictions } = await getGroupMatchPredictions(
      "Test User 1"
    );

    expect(groupMatchPredictions).toHaveLength(1);
    done();
  });

  it("Invalid groupMatchPredictions name", async done => {
    const { groupMatchPredictions } = await getGroupMatchPredictions(
      "Test User 1234"
    );

    expect(groupMatchPredictions).toHaveLength(0);
    done();
  });
});

describe("Add groupMatchPredictions", () => {
  it("Valid groupMatchPredictions", async done => {
    const { groupMatchPredictions } = await addGroupMatchPredictions([
      {
        username: "Test User 1",
        groupMatchId: 1,
        homeGoals: 3,
        awayGoals: 3,
      },
      {
        username: "Test User 2",
        groupMatchId: 2,
        homeGoals: 4,
        awayGoals: 4,
      },
    ]);

    expect(groupMatchPredictions).toHaveLength(2);
    done();
  });
});
