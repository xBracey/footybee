import {
  addKnockoutMatch,
  addKnockoutMatches,
  getKnockoutMatch,
  getKnockoutMatches,
  getAllKnockoutMatches,
  deleteKnockoutMatch,
  getMatchFromRound,
} from "../../services";

describe("Get knockoutMatch", () => {
  it("Valid knockoutMatch name", async done => {
    const { knockoutMatch } = await getKnockoutMatch(1);
    const name = knockoutMatch.get("id", { plain: true });

    expect(name).toEqual(1);
    done();
  });

  it("Invalid knockoutMatch name", async done => {
    const { knockoutMatch } = await getKnockoutMatch(12323);

    expect(knockoutMatch).toBeNull();
    done();
  });
});

describe("Get knockoutMatches", () => {
  it("Valid knockoutMatches name", async done => {
    const { knockoutMatches } = await getKnockoutMatches([1, 2]);

    expect(knockoutMatches).toHaveLength(2);
    done();
  });

  it("Invalid knockoutMatches name", async done => {
    const { knockoutMatches } = await getKnockoutMatches([2312312, 312323]);

    expect(knockoutMatches).toHaveLength(0);
    done();
  });
});

describe("Get all knockoutMatches", () => {
  it("Valid", async done => {
    const { knockoutMatches } = await getAllKnockoutMatches();

    expect(knockoutMatches.length).toBeGreaterThan(1);
    done();
  });
});

describe("Add knockoutMatch", () => {
  it("Valid knockoutMatch", async done => {
    const { knockoutMatch } = await addKnockoutMatch({
      date: new Date(),
      homeGoals: 1,
      awayGoals: 1,
      roundName: "Test Round 1",
      homeTeam: "Test Team 1",
      awayTeam: "Test Team 2",
    });

    const name = knockoutMatch.get("homeTeam", { plain: true });

    expect(name).toEqual("Test Team 1");
    done();
  });
});

describe("Add knockoutMatches", () => {
  it("Valid knockoutMatches", async done => {
    const { knockoutMatches } = await addKnockoutMatches([
      {
        date: new Date(),
        homeGoals: 1,
        awayGoals: 1,
        roundName: "Test Round 1",
        homeTeam: "Test Team 1",
        awayTeam: "Test Team 2",
      },
      {
        date: new Date(),
        homeGoals: 1,
        awayGoals: 1,
        roundName: "Test Round 1",
        homeTeam: "Test Team 1",
        awayTeam: "Test Team 2",
      },
    ]);

    expect(knockoutMatches).toHaveLength(2);
    done();
  });
});

describe("Delete knockoutMatch", () => {
  it("Valid knockoutMatch name", async done => {
    const { error } = await deleteKnockoutMatch(3);

    expect(error).toBeUndefined();
    done();
  });

  it("Invalid knockoutMatch name", async done => {
    const { error } = await deleteKnockoutMatch(32132);

    expect(error.message).toEqual("Primary Key not found when deleting entity");
    done();
  });
});

describe("Get knockoutMatch from round name", () => {
  it("Valid roundName", async done => {
    const { knockoutMatches } = await getMatchFromRound("Test Round 2");

    expect(knockoutMatches).toHaveLength(1);
    done();
  });
});
