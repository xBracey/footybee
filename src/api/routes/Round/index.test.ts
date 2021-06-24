import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create round endpoint", () => {
  it("Valid round", async done => {
    const response = await request
      .post("/round/create")
      .send({
        name: "Test Round 1234",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate round", async done => {
    const response = await request
      .post("/round/create")
      .send({
        name: "Test Round 1",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("round name already exists");
    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/round/create")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/round/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/round/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test delete round endpoint", () => {
  it("Valid round name", async done => {
    const response = await request.delete("/round/Test Delete Round 2");

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid round name", async done => {
    const response = await request.delete("/round/fewfewfewfewfew");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("round does not exist");
    done();
  });
});
