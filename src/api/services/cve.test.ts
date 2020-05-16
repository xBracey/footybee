import { addCVE, addCVEs, getCVEs, searchCVEs } from "./cve";
import { Severity } from "../models/cve/type";

describe("Add CVE", () => {
  it("Valid CVE", async done => {
    const { cve } = await addCVE({
      id: "CVE-TEST-2",
      severity: Severity.MEDIUM,
      description: "Network Error",
      publishedDate: new Date("2023-06-01T00:00:00"),
    });

    const name = cve.get("id", { plain: true });

    expect(name).toEqual("CVE-TEST-2");
    done();
  });

  it("Invalid CVE", async done => {
    const { cve, error } = await addCVE({
      id: "CVE-TEST-2",
      severity: Severity.MEDIUM,
      description: "Network Error",
      publishedDate: new Date("2023-01-04T00:00:00"),
    });

    expect(cve).toBeNull();
    expect(error).not.toBeNull();
    done();
  });
});

describe("Add CVEs", () => {
  it("Valid CVEs", async done => {
    const { cves } = await addCVEs([
      {
        id: "CVE-TEST-3",
        severity: Severity.HIGH,
        description: "Network Error",
        publishedDate: new Date("2023-01-02T00:00:00"),
      },
      {
        id: "CVE-TEST-4",
        severity: Severity.MEDIUM,
        description: "Network Error",
        publishedDate: new Date("2023-03-01T00:00:00"),
      },
    ]);

    const name = cves[0].get("id", { plain: true });

    expect(name).toEqual("CVE-TEST-3");
    done();
  });

  it("Invalid CVEs", async done => {
    const { cves, error } = await addCVEs([
      {
        id: "CVE-TEST-2",
        severity: Severity.MEDIUM,
        description: "Network Error",
        publishedDate: new Date("2022-01-05T00:00:00"),
      },
      {
        id: "CVE-TEST-2",
        severity: Severity.MEDIUM,
        description: "Network Error",
        publishedDate: new Date("2022-01-05T00:00:00"),
      },
    ]);

    expect(cves).toBeNull();
    expect(error).not.toBeNull();
    done();
  });
});

describe("Get CVEs", () => {
  it("Valid year and severity", async done => {
    const { cves } = await getCVEs(2023, [Severity.MEDIUM]);

    expect(cves.length).toEqual(2);
    done();
  });
});

describe("Search CVEs", () => {
  it("Valid search string", async done => {
    const { cves } = await searchCVEs("TEST");

    expect(cves.length).toEqual(3);
    done();
  });
});
