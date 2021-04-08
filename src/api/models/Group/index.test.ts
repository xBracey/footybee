import {
  addGroup,
  addGroups,
  getGroup,
  getGroups,
  getAllGroups,
  deleteGroup,
} from "../../services";

describe("Get group", () => {
  it("Valid group name", async done => {
    const { group } = await getGroup("Test Group 1");

    const letter = group.get("letter", { plain: true });

    expect(letter).toEqual("Test Group 1");
    done();
  });

  it("Invalid group name", async done => {
    const { group } = await getGroup("Incorrect Group 1");

    expect(group).toBeNull();
    done();
  });
});

describe("Get groups", () => {
  it("Valid groups name", async done => {
    const { groups } = await getGroups(["Test Group 1", "Test Group 2"]);

    expect(groups).toHaveLength(2);
    done();
  });

  it("Invalid groups name", async done => {
    const { groups } = await getGroups([
      "Incorrect group 1",
      "Incorrect group 2",
    ]);

    expect(groups).toHaveLength(0);
    done();
  });
});

describe("Get all groups", () => {
  it("Valid", async done => {
    const { groups } = await getAllGroups();

    expect(groups.length).toBeGreaterThan(1);
    done();
  });
});

describe("Add group", () => {
  it("Valid group", async done => {
    const { group } = await addGroup({
      letter: "Test Group 3",
    });

    const name = group.get("letter", { plain: true });

    expect(name).toEqual("Test Group 3");
    done();
  });

  it("Duplicate group name", async done => {
    const { error } = await addGroup({
      letter: "Test Group 1",
    });

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Add groups", () => {
  it("Valid groups", async done => {
    const { groups } = await addGroups([
      {
        letter: "Test Group 4",
      },
      {
        letter: "Test Group 5",
      },
    ]);

    expect(groups).toHaveLength(2);
    done();
  });

  it("Duplicate group names", async done => {
    const { error } = await addGroups([
      {
        letter: "Test Group 1",
      },
      {
        letter: "Test Group 2",
      },
    ]);

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Delete group", () => {
  it("Valid group name", async done => {
    const { error } = await deleteGroup("Test Group Delete 1");

    expect(error).toBeUndefined();
    done();
  });

  it("Invalid group name", async done => {
    const { error } = await deleteGroup("Incorrect Group");

    expect(error.message).toEqual("Primary Key not found when deleting entity");
    done();
  });
});
