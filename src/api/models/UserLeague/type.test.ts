import { isValidUserLeague } from "./type";

describe("Test isValiduserLeague", () => {
  it("Valid", async done => {
    const validUserLeague = isValidUserLeague({
      username: "Test User 1",
      leagueCode: "Test League 1",
    });
    expect(validUserLeague).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validUserLeague = isValidUserLeague({});

    expect(validUserLeague).toBe(false);
    done();
  });
});
