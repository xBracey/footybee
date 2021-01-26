import {
  addTeam,
  addTeams,
  getTeam,
  getTeams,
  getAllTeams,
  deleteTeam,
} from "../../services";

describe("Get team", () => {
  it("Valid team name", async done => {
    const { team } = await getTeam("Test Team 1");
    const name = team.get("name", { plain: true });

    expect(name).toEqual("Test Team 1");
    done();
  });

  it("Invalid team name", async done => {
    const { team } = await getTeam("Incorrect Team 1");

    expect(team).toBeNull();
    done();
  });
});

describe("Get teams", () => {
  it("Valid teams name", async done => {
    const { teams } = await getTeams(["Test Team 1", "Test Team 2"]);

    expect(teams).toHaveLength(2);
    done();
  });

  it("Invalid teams name", async done => {
    const { teams } = await getTeams(["Incorrect team 1", "Incorrect team 2"]);

    expect(teams).toHaveLength(0);
    done();
  });
});

describe("Get all teams", () => {
  it("Valid", async done => {
    const { teams } = await getAllTeams();

    expect(teams.length).toBeGreaterThan(1);
    done();
  });
});

describe("Add team", () => {
  it("Valid team", async done => {
    const { team } = await addTeam({
      name: "Test Team 3",
    });

    const name = team.get("name", { plain: true });

    expect(name).toEqual("Test Team 3");
    done();
  });

  it("Duplicate team name", async done => {
    const { error } = await addTeam({
      name: "Test Team 1",
    });

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Add teams", () => {
  it("Valid teams", async done => {
    const { teams } = await addTeams([
      {
        name: "Test Team 4",
      },
      {
        name: "Test Team 5",
      },
    ]);

    expect(teams).toHaveLength(2);
    done();
  });

  it("Duplicate team names", async done => {
    const { error } = await addTeams([
      {
        name: "Test Team 1",
      },
      {
        name: "Test Team 2",
      },
    ]);

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Delete team", () => {
  it("Valid team name", async done => {
    const { error } = await deleteTeam("Test Team Delete 1");

    expect(error).toBeUndefined();
    done();
  });

  it("Invalid team name", async done => {
    const { error } = await deleteTeam("Incorrect Team");

    expect(error.message).toEqual("Primary Key not found when deleting entity");
    done();
  });
});
