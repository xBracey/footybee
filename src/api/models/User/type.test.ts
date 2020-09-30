import { isValidUser } from "./type";

describe("Test isValiduser", () => {
  it("Valid", async done => {
    const validUser = isValidUser({
      username: "Test User 1",
      password: "password",
      email: "test1@test.com",
      verified: false,
      admin: true,
    });
    expect(validUser).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validUser = isValidUser({
      username: "",
      password: "",
      email: "",
      verified: false,
      admin: true,
    });

    expect(validUser).toBe(false);
    done();
  });
});
