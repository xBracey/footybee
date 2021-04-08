import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create team endpoint", () => {
  it("Valid team", async done => {
    const response = await request
      .post("/team/create")
      .send({
        name: "Test New 1",
        groupLetter: "Test Group 1",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate team", async done => {
    const response = await request
      .post("/team/create")
      .send({
        name: "Test Team 1",
        groupLetter: "Test Group 1",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("Team name already exists");
    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/team/create")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/team/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/team/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test delete team endpoint", () => {
  it("Valid team name", async done => {
    const component = `/team/${encodeURIComponent("Test Team Delete 2")}`;

    const response = await request.delete(component);

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid team name", async done => {
    const response = await request.delete("/team/fewfewfewfewfew");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Team name does not exist");
    done();
  });
});
