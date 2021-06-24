import { isValidRound } from "./type";

describe("Test isValidround", () => {
  it("Valid", async done => {
    const validRound = isValidRound({
      name: "Round of 16",
    });
    expect(validRound).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validRound = isValidRound({});

    expect(validRound).toBe(false);
    done();
  });
});
