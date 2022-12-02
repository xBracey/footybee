import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create player endpoint", () => {
  it("Valid player", async done => {
    const response = await request
      .post("/player/create")
      .send({
        name: "Test Player New 1",
        teamName: "Test Team 1",
        goals: 0,
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate player", async done => {
    const response = await request
      .post("/player/create")
      .send({
        name: "Test Player 1",
        teamName: "Test Team 1",
        goals: 0,
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("Player name already exists");
    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/player/create")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/player/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/player/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Incorrect Team", async done => {
    const response = await request
      .post("/player/create")
      .send({
        name: "Test Player New 2",
        teamName: "Invalid Team",
        goals: 0,
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(422);
    expect(response.body.error).toBe("Team does not exist");
    done();
  });
});

describe("Test delete player endpoint", () => {
  it("Valid player name", async done => {
    const component = `/player/${encodeURIComponent("Test Player Delete 2")}`;

    const response = await request.delete(component);

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid player name", async done => {
    const response = await request.delete("/player/fewfewfewfewfew");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Player name does not exist");
    done();
  });
});
