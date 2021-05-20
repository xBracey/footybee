import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create userLeague endpoint", () => {
  it("Valid userLeague", async done => {
    const response = await request
      .post("/userLeague/create")
      .send({})
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate userLeague", async done => {
    const response = await request
      .post("/userLeague/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("userLeague name already exists");
    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/userLeague/create")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/userLeague/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/userLeague/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test bulk create userLeague endpoint", () => {
  it("Valid userLeagues", async done => {
    const response = await request
      .post("/userLeague/bulk-create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate userLeague", async done => {
    const response = await request
      .post("/userLeague/bulk-create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(409);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/userLeague/bulk-create")
      .send([{ fefefe: "fefefefe" }])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Invalid array", async done => {
    const response = await request
      .post("/userLeague/bulk-create")
      .send([])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Wrong Data type", async done => {
    const response = await request
      .post("/userLeague/bulk-create")
      .send({ fefe: "fefef" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test delete userLeague endpoint", () => {
  it("Valid userLeague name", async done => {
    const response = await request.delete("/userLeague/test");

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid userLeague name", async done => {
    const response = await request.delete("/userLeague/fewfewfewfewfew");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("userLeague does not exist");
    done();
  });
});
