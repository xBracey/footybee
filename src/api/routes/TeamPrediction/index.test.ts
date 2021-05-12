import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create teamPrediction endpoint", () => {
  it("Valid teamPredictions", async done => {
    const response = await request
      .post("/teamPrediction/create")
      .send({
        teamPredictions: [
          {
            username: "Test User 1",
            teamName: "Test Team 1",
            groupPosition: 10,
          },
        ],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/teamPrediction/create")
      .send({ teamPredictions: [{ fefefe: "fefefefe" }] })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Invalid array", async done => {
    const response = await request
      .post("/teamPrediction/create")
      .send([])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Wrong Data type", async done => {
    const response = await request
      .post("/teamPrediction/create")
      .send({ fefe: "fefef" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test get team predictions", () => {
  it("Valid group letter", async done => {
    const response = await request.get("/teamPrediction/Test User 1");

    expect(response.status).toBe(200);
    done();
  });
});
