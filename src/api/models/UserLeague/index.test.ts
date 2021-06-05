import {
  addUserLeague,
  addUserLeagues,
  deleteUserLeague,
  getUsersLeagues,
} from "../../services";

describe("Get usersLeague", () => {
  it("Valid userLeague name", async done => {
    const { userLeagues } = await getUsersLeagues("Test User 1");

    expect(userLeagues).toHaveLength(2);
    done();
  });

  it("Invalid userLeague name", async done => {
    const { userLeagues } = await getUsersLeagues("Test User 3");

    expect(userLeagues).toHaveLength(0);
    done();
  });
});

describe("Add userLeague", () => {
  it("Valid userLeague", async done => {
    const { userLeague } = await addUserLeague({
      username: "Test User League 1",
      leagueCode: "Test User League Code 1",
    });

    const username = userLeague.get("username", { plain: true });

    expect(username).toEqual("Test User League 1");
    done();
  });

  it("Duplicate userLeague name", async done => {
    const { error } = await addUserLeague({
      username: "Test User 1",
      leagueCode: "Test League Code 1",
    });

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Add userLeagues", () => {
  it("Valid userLeagues", async done => {
    const { userLeagues } = await addUserLeagues([
      {
        username: "Test User League 2",
        leagueCode: "Test User League Code 1",
      },
      {
        username: "Test User League 2",
        leagueCode: "Test User League Code 2",
      },
    ]);

    expect(userLeagues).toHaveLength(2);
    done();
  });

  it("Duplicate userLeague names", async done => {
    const { error } = await addUserLeagues([
      {
        username: "Test User 1",
        leagueCode: "Test League Code 1",
      },
      {
        username: "Test User 2",
        leagueCode: "Test League Code 2",
      },
    ]);

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Delete userLeague", () => {
  it("Valid userLeague name", async done => {
    const { error } = await deleteUserLeague(
      "Test User 2",
      "Test League Code 2"
    );

    expect(error).toBeUndefined();
    done();
  });

  it("Invalid userLeague name", async done => {
    const { error } = await deleteUserLeague(
      "Test User 3",
      "Test League Code 2"
    );

    expect(error.message).toEqual("Primary Key not found when deleting entity");
    done();
  });
});
