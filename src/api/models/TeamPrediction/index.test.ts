import { addTeamPredictions, getTeamPredictions } from "../../services";

describe("Get teamPredictions", () => {
  it("Valid teamPredictions name", async done => {
    const { teamPredictions } = await getTeamPredictions("Test User 1");

    expect(teamPredictions).toHaveLength(1);
    done();
  });

  it("Invalid teamPredictions name", async done => {
    const { teamPredictions } = await getTeamPredictions("Test User 1000");

    expect(teamPredictions).toHaveLength(0);
    done();
  });
});

describe("Add teamPredictions", () => {
  it("Valid teamPredictions", async done => {
    const { teamPredictions } = await addTeamPredictions([
      {
        username: "Test User 2",
        teamName: "Test Team 1",
        groupPosition: 2,
      },
    ]);

    expect(teamPredictions).toHaveLength(1);
    done();
  });

  it("Duplicate teamPrediction names no difference", async done => {
    const { teamPredictions } = await addTeamPredictions([
      {
        username: "Test User 1",
        teamName: "Test Team 1",
        groupPosition: 5,
      },
      {
        username: "Test User 2",
        teamName: "Test Team 2",
        groupPosition: 5,
      },
    ]);

    expect(teamPredictions).toHaveLength(2);
    done();
  });
});
