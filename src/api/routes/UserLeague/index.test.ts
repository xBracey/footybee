import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create userLeague endpoint", () => {
  it("Valid userLeague", async done => {
    const response = await request
      .post("/userLeague/create")
      .send({
        username: "Test User League 1",
        leagueName: "Test League 1",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate userLeague", async done => {
    const response = await request
      .post("/userLeague/create")
      .send({ username: "Test User 1", leagueName: "Test League 1" })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("User League already exists");
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

describe("Test delete userLeague endpoint", () => {
  it("Valid userLeague name", async done => {
    const response = await request.delete(
      "/userLeague/Test User 2/Test League 1"
    );

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid userLeague name", async done => {
    const response = await request.delete(
      "/userLeague/fewfewfewfewfew/fefiefuef"
    );

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("User League does not exist");
    done();
  });
});
