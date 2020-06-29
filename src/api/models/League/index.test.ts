import {
  addLeague,
  addLeagues,
  getLeague,
  getLeagues,
  getAllLeagues,
  deleteLeague,
} from "../../services";

describe("Get league", () => {
  it("Valid league name", async done => {
    const { league } = await getLeague("Test League 1");

    const name = league.get("leagueName", { plain: true });

    expect(name).toEqual("Test League 1");
    done();
  });

  it("Invalid league name", async done => {
    const { league } = await getLeague("Incorrect League 1");

    expect(league).toBeNull();
    done();
  });
});

describe("Get leagues", () => {
  it("Valid leagues name", async done => {
    const { leagues } = await getLeagues(["Test League 1", "Test League 2"]);

    expect(leagues).toHaveLength(2);
    done();
  });

  it("Invalid leagues name", async done => {
    const { leagues } = await getLeagues([
      "Incorrect League 1",
      "Incorrect League 2",
    ]);

    expect(leagues).toHaveLength(0);
    done();
  });
});

describe("Get all leagues", () => {
  it("Valid", async done => {
    const { leagues } = await getAllLeagues();

    expect(leagues.length).toBeGreaterThan(1);
    done();
  });
});

describe("Add league", () => {
  it("Valid league", async done => {
    const { league } = await addLeague({
      leagueName: "Test League 3",
      displayName: "Tom's League",
      password: "1234",
    });

    const name = league.get("leagueName", { plain: true });

    expect(name).toEqual("Test League 3");
    done();
  });

  it("Duplicate league name", async done => {
    const { error } = await addLeague({
      leagueName: "Test League 1",
      displayName: "Tom's League",
      password: "1234",
    });

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Add leagues", () => {
  it("Valid leagues", async done => {
    const { leagues } = await addLeagues([
      {
        leagueName: "Test League 4",
        displayName: "Tom's League",
        password: "1234",
      },
      {
        leagueName: "Test League 5",
        displayName: "Tom's League",
        password: "1234",
      },
    ]);

    expect(leagues).toHaveLength(2);
    done();
  });

  it("Duplicate league names", async done => {
    const { error } = await addLeagues([
      {
        leagueName: "Test League 1",
        displayName: "Tom's League",
        password: "1234",
      },
      {
        leagueName: "Test League 2",
        displayName: "Tom's League",
        password: "1234",
      },
    ]);

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Delete league", () => {
  it("Valid league name", async done => {
    const { error } = await deleteLeague("Test League Delete 1");

    expect(error).toBeUndefined();
    done();
  });

  it("Invalid league name", async done => {
    const { error } = await deleteLeague("Incorrect League");

    expect(error.message).toEqual("Primary Key not found when deleting entity");
    done();
  });
});
