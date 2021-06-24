import {
  addRound,
  addRounds,
  getRound,
  getRounds,
  getAllRounds,
  deleteRound,
} from "../../services";

describe("Get round", () => {
  it("Valid round name", async done => {
    const { round } = await getRound("Test Round 1");

    const name = round.get("name", { plain: true });

    expect(name).toEqual("Test Round 1");
    done();
  });

  it("Invalid round name", async done => {
    const { round } = await getRound("Incorrect Round 1");

    expect(round).toBeNull();
    done();
  });
});

describe("Get rounds", () => {
  it("Valid rounds name", async done => {
    const { rounds } = await getRounds(["Test Round 1", "Test Round 2"]);

    expect(rounds).toHaveLength(2);
    done();
  });

  it("Invalid rounds name", async done => {
    const { rounds } = await getRounds([
      "Incorrect Round 1",
      "Incorrect Round 2",
    ]);

    expect(rounds).toHaveLength(0);
    done();
  });
});

describe("Get all rounds", () => {
  it("Valid", async done => {
    const { rounds } = await getAllRounds();

    expect(rounds.length).toBeGreaterThan(1);
    done();
  });
});

describe("Add round", () => {
  it("Valid round", async done => {
    const { round } = await addRound({
      name: "Test Round 3",
    });

    const name = round.get("name", { plain: true });

    expect(name).toEqual("Test Round 3");
    done();
  });

  it("Duplicate round name", async done => {
    const { error } = await addRound({
      name: "Test Round 1",
    });

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Add rounds", () => {
  it("Valid rounds", async done => {
    const { rounds } = await addRounds([
      {
        name: "Test Round 4",
      },
      {
        name: "Test Round 5",
      },
    ]);

    expect(rounds).toHaveLength(2);
    done();
  });

  it("Duplicate round names", async done => {
    const { error } = await addRounds([
      {
        name: "Test Round 1",
      },
      {
        name: "Test Round 2",
      },
    ]);

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Delete round", () => {
  it("Valid round name", async done => {
    const { error } = await deleteRound("Test Round Delete 1");

    expect(error).toBeUndefined();
    done();
  });

  it("Invalid round name", async done => {
    const { error } = await deleteRound("Incorrect Round");

    expect(error.message).toEqual("Primary Key not found when deleting entity");
    done();
  });
});
