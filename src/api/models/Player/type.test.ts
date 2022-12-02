import { isValidPlayer } from "./type";

describe("Test isValidplayer", () => {
  it("Valid", async done => {
    const validPlayer = isValidPlayer({
      name: "test",
      teamName: "test team",
      goals: 2,
    });
    expect(validPlayer).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validPlayer = isValidPlayer({});

    expect(validPlayer).toBe(false);
    done();
  });
});
