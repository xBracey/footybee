import { isValidLeague } from "./type";

describe("Test isValidLeague", () => {
  it("Valid", async done => {
    const validLeague = isValidLeague({
      leagueName: "Test 1",
      displayName: "Test",
      password: "Test",
    });
    expect(validLeague).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validLeague = isValidLeague({
      leagueName: "",
      displayName: "",
      password: "",
    });

    expect(validLeague).toBe(false);
    done();
  });

  it("Not Valid Type", async done => {
    const validLeague = isValidLeague("Test 1");

    expect(validLeague).toBe(false);
    done();
  });
});
