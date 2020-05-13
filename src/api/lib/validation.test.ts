import { validateString, validateEmail } from "./validation";

describe("Test validateString", () => {
  it("Valid (required)", async done => {
    const validString = validateString("Test", true);
    expect(validString).toBe(true);
    done();
  });

  it("Not Valid (required)", async done => {
    const validString = validateString("", true);
    expect(validString).toBe(false);
    done();
  });

  it("Valid (not required)", async done => {
    const validString = validateString(null, false);
    expect(validString).toBe(true);
    done();
  });

  it("Not Valid (not required)", async done => {
    const validString = validateString(12, false);
    expect(validString).toBe(false);
    done();
  });
});

describe("Test validateEmail", () => {
  it("Valid (required)", async done => {
    const validEmail = validateEmail("Test@test.com", true);
    expect(validEmail).toBe(true);
    done();
  });

  it("Not Valid (required)", async done => {
    const validEmail = validateEmail("Test", true);
    expect(validEmail).toBe(false);
    done();
  });

  it("Valid (not required)", async done => {
    const validEmail = validateEmail(null, false);
    expect(validEmail).toBe(true);
    done();
  });

  it("Not Valid (not required)", async done => {
    const validEmail = validateEmail("Test", false);
    expect(validEmail).toBe(false);
    done();
  });
});
