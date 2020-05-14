import supertest from "supertest";
import app from "../";

const request = supertest(app);

describe("Test get CVE endpoint", () => {
  it("Valid CVE", async done => {
    const response = await request
      .post("/api/cve")
      .send({
        severity: "MEDIUM",
        year: 2018,
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(1);
    done();
  });

  it("Invalid CVE", async done => {
    const response = await request
      .post("/api/cve")
      .send({ severity: "MEDIUM", year: null })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test search CVE endpoint", () => {
  it("Valid CVE", async done => {
    const response = await request
      .get("/api/cve/CVE")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(1);
    done();
  });
});
