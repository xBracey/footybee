import { isValidCVE, isValidGetCVE } from "./type";

describe("Test isValidCVE", () => {
  it("Valid", async done => {
    const validCVE = isValidCVE({
      id: "CVE-TEST-1",
      severity: "HIGH",
      description: "Network Error",
      publishedDate: "2020-01-01T00:00:00",
    });
    expect(validCVE).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validCVE = isValidCVE({
      id: "CVE-TEST-1",
      severity: "HIGH",
      description: "Network Error",
      publishedDate: "NOTADATE",
    });

    expect(validCVE).toBe(false);
    done();
  });

  it("Not Object", async done => {
    const validCVE = isValidCVE("CVE-TEST-1");

    expect(validCVE).toBe(false);
    done();
  });
});

describe("Test isValidGetCVE", () => {
  it("Valid", async done => {
    const validCVE = isValidGetCVE({
      severity: "HIGH",
      year: 2020,
    });
    expect(validCVE).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const validCVE = isValidGetCVE({
      severity: "HIGH",
      year: null,
    });

    expect(validCVE).toBe(false);
    done();
  });

  it("Not Object", async done => {
    const validCVE = isValidGetCVE("Tom");

    expect(validCVE).toBe(false);
    done();
  });
});
