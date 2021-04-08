import { isValidGroup } from "./type";

describe("Test isValidgroup", () => {
  it("Valid", async done => {
    const validGroup = isValidGroup({
      letter: "A",
    });
    expect(validGroup).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validGroup = isValidGroup({});

    expect(validGroup).toBe(false);
    done();
  });
});
