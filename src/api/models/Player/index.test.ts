import {
  addPlayer,
  addPlayers,
  getPlayer,
  getPlayers,
  getAllPlayers,
  deletePlayer,
} from "../../services";

describe("Get player", () => {
  it("Valid player name", async done => {
    const { player } = await getPlayer("Test Player 1");
    const name = player.get("name", { plain: true });

    expect(name).toEqual("Test Player 1");
    done();
  });

  it("Invalid player name", async done => {
    const { player } = await getPlayer("Incorrect Player 1");

    expect(player).toBeNull();
    done();
  });
});

describe("Get players", () => {
  it("Valid players name", async done => {
    const { players } = await getPlayers(["Test Player 1", "Test Player 2"]);

    expect(players).toHaveLength(2);
    done();
  });

  it("Invalid players name", async done => {
    const { players } = await getPlayers([
      "Incorrect player 1",
      "Incorrect player 2",
    ]);

    expect(players).toHaveLength(0);
    done();
  });
});

describe("Get all players", () => {
  it("Valid", async done => {
    const { players } = await getAllPlayers();

    expect(players.length).toBeGreaterThan(1);
    done();
  });
});

describe("Add player", () => {
  it("Valid player", async done => {
    const { player } = await addPlayer({
      name: "Test Player 3",
    });

    const name = player.get("name", { plain: true });

    expect(name).toEqual("Test Player 3");
    done();
  });

  it("Duplicate player name", async done => {
    const { error } = await addPlayer({
      name: "Test Player 1",
    });

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Add players", () => {
  it("Valid players", async done => {
    const { players } = await addPlayers([
      {
        name: "Test Player 4",
      },
      {
        name: "Test Player 5",
      },
    ]);

    expect(players).toHaveLength(2);
    done();
  });

  it("Duplicate player names", async done => {
    const { error } = await addPlayers([
      {
        name: "Test Player 1",
      },
      {
        name: "Test Player 2",
      },
    ]);

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Delete player", () => {
  it("Valid player name", async done => {
    const { error } = await deletePlayer("Test Player Delete 1");

    expect(error).toBeUndefined();
    done();
  });

  it("Invalid player name", async done => {
    const { error } = await deletePlayer("Incorrect Player");

    expect(error.message).toEqual("Primary Key not found when deleting entity");
    done();
  });
});
