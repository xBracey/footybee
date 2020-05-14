import { validateString, validateNumber, validateDate } from "./validation";

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

describe("Test validateNumber", () => {
  it("Valid (required)", async done => {
    const validEmail = validateNumber(12, true);
    expect(validEmail).toBe(true);
    done();
  });

  it("Not Valid (required)", async done => {
    const validEmail = validateNumber(null, true);
    expect(validEmail).toBe(false);
    done();
  });

  it("Valid (not required)", async done => {
    const validEmail = validateNumber(null, false);
    expect(validEmail).toBe(true);
    done();
  });

  it("Not Valid (not required)", async done => {
    const validEmail = validateNumber("Test", false);
    expect(validEmail).toBe(false);
    done();
  });
});

describe("Test validateDate", () => {
  it("Valid (required)", async done => {
    const validEmail = validateDate("2020-01-01T00:00:00", true);
    expect(validEmail).toBe(true);
    done();
  });

  it("Not Valid (required)", async done => {
    const validEmail = validateDate("Test", true);
    expect(validEmail).toBe(false);
    done();
  });

  it("Valid (not required)", async done => {
    const validEmail = validateDate(null, false);
    expect(validEmail).toBe(true);
    done();
  });

  it("Not Valid (not required)", async done => {
    const validEmail = validateDate("Test", false);
    expect(validEmail).toBe(false);
    done();
  });
});
