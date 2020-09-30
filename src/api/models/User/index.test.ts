import {
  addUser,
  addUsers,
  getUser,
  getUsers,
  getAllUsers,
  deleteUser,
} from "../../services";

describe("Get user", () => {
  it("Valid user name", async done => {
    const { user } = await getUser("Test User 1");
    const name = user.get("username", { plain: true });

    expect(name).toEqual("Test User 1");
    done();
  });

  it("Invalid user name", async done => {
    const { user } = await getUser("Incorrect User 1");

    expect(user).toBeNull();
    done();
  });
});

describe("Get users", () => {
  it("Valid users name", async done => {
    const { users } = await getUsers(["Test User 1", "Test User 2"]);

    expect(users).toHaveLength(2);
    done();
  });

  it("Invalid users name", async done => {
    const { users } = await getUsers(["Incorrect user 1", "Incorrect user 2"]);

    expect(users).toHaveLength(0);
    done();
  });
});

describe("Get all users", () => {
  it("Valid", async done => {
    const { users } = await getAllUsers();

    expect(users.length).toBeGreaterThan(1);
    done();
  });
});

describe("Add user", () => {
  it("Valid user", async done => {
    const { user } = await addUser({
      username: "Test User 3",
      password: "password",
      email: "test3@test.com",
      verified: false,
      admin: true,
    });

    const name = user.get("username", { plain: true });

    expect(name).toEqual("Test User 3");
    done();
  });

  it("Duplicate user name", async done => {
    const { error } = await addUser({
      username: "Test User 1",
      password: "password",
      email: "testduplicate1@test.com",
      verified: false,
      admin: true,
    });

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Add users", () => {
  it("Valid users", async done => {
    const { users } = await addUsers([
      {
        username: "Test User 4",
        password: "password",
        email: "test4@test.com",
        verified: false,
        admin: true,
      },
      {
        username: "Test User 5",
        password: "password",
        email: "test5@test.com",
        verified: false,
        admin: true,
      },
    ]);

    expect(users).toHaveLength(2);
    done();
  });

  it("Duplicate user names", async done => {
    const { error } = await addUsers([
      {
        username: "Test User 1",
        password: "password",
        email: "testduplicate2@test.com",
        verified: false,
        admin: true,
      },
      {
        username: "Test User 2",
        password: "password",
        email: "testduplicate4@test.com",
        verified: false,
        admin: true,
      },
    ]);

    expect(error.message).toEqual("Primary Key duplicate");
    done();
  });
});

describe("Delete user", () => {
  it("Valid user name", async done => {
    const { error } = await deleteUser("Test User Delete 1");

    expect(error).toBeUndefined();
    done();
  });

  it("Invalid user name", async done => {
    const { error } = await deleteUser("Incorrect User");

    expect(error.message).toEqual("Primary Key not found when deleting entity");
    done();
  });
});
