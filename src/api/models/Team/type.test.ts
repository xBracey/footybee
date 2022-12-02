import { isValidTeam } from "./type";

describe("Test isValidteam", () => {
  it("Valid", async done => {
    const validTeam = isValidTeam({
      name: "test",
      groupLetter: "a",
      wins: 2,
    });
    expect(validTeam).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validTeam = isValidTeam({});

    expect(validTeam).toBe(false);
    done();
  });
});
