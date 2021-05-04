import {
  addGroupMatch,
  addGroupMatches,
  getGroupMatch,
  getGroupMatches,
  getAllGroupMatches,
  deleteGroupMatch,
  getMatchFromGroup,
} from "../../services";

describe("Get groupMatch", () => {
  it("Valid groupMatch name", async done => {
    const { groupMatch } = await getGroupMatch("Test Group Match 1");
    const name = groupMatch.get("id", { plain: true });

    expect(name).toEqual("Test Group Match 1");
    done();
  });

  it("Invalid groupMatch name", async done => {
    const { groupMatch } = await getGroupMatch("Incorrect Group Match 1");

    expect(groupMatch).toBeNull();
    done();
  });
});

describe("Get groupMatches", () => {
  it("Valid groupMatches name", async done => {
    const { groupMatches } = await getGroupMatches([
      "Test Group Match 1",
      "Test Group Match 2",
    ]);

    expect(groupMatches).toHaveLength(2);
    done();
  });

  it("Invalid groupMatches name", async done => {
    const { groupMatches } = await getGroupMatches([
      "Incorrect groupMatch 1",
      "Incorrect groupMatch 2",
    ]);

    expect(groupMatches).toHaveLength(0);
    done();
  });
});

describe("Get all groupMatches", () => {
  it("Valid", async done => {
    const { groupMatches } = await getAllGroupMatches();

    expect(groupMatches.length).toBeGreaterThan(1);
    done();
  });
});

describe("Add groupMatch", () => {
  it("Valid groupMatch", async done => {
    const { groupMatch } = await addGroupMatch({
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      groupLetter: "Test Group 1",
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
    });

    const name = groupMatch.get("homeTeam", { plain: true });

    expect(name).toEqual("Test Team 1");
    done();
  });
});

describe("Add groupMatches", () => {
  it("Valid groupMatches", async done => {
    const { groupMatches } = await addGroupMatches([
      {
        date: new Date(),
        homeGoals: 1,
        awayGoals: 1,
        groupLetter: "Test Group 1",
        homeTeam: "Test Team 1",
        awayTeam: "Test Team 2",
      },
      {
        date: new Date(),
        homeGoals: 1,
        awayGoals: 1,
        groupLetter: "Test Group 1",
        homeTeam: "Test Team 1",
        awayTeam: "Test Team 2",
      },
    ]);

    expect(groupMatches).toHaveLength(2);
    done();
  });
});

describe("Delete groupMatch", () => {
  it("Valid groupMatch name", async done => {
    const { error } = await deleteGroupMatch("Test Group Match Delete 1");

    expect(error).toBeUndefined();
    done();
  });

  it("Invalid groupMatch name", async done => {
    const { error } = await deleteGroupMatch("Incorrect GroupMatch");

    expect(error.message).toEqual("Primary Key not found when deleting entity");
    done();
  });
});

describe("Get groupMatch from group letter", () => {
  it("Valid groupLetter", async done => {
    const { groupMatches } = await getMatchFromGroup("Test Group 2");

    expect(groupMatches).toHaveLength(1);
    done();
  });
});
