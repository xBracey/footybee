import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create groupMatchPrediction endpoint", () => {
  it("Valid groupMatchPrediction", async done => {
    const response = await request
      .post("/groupMatchPrediction/create")
      .send({
        groupMatchPredictions: [
          {
            username: "Test User 1",
            groupMatchId: 1,
            homeGoals: 1,
            awayGoals: 3,
          },
        ],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/groupMatchPrediction/create")
      .send({
        groupMatchPredictions: [
          {
            username: "Test User 1",
            groupMatchId: 1,
            homeGoals: 1,
            awayGoals: 3,
          },
          { fefefe: "htrht" },
        ],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/groupMatchPrediction/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/groupMatchPrediction/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test group match team predictions", () => {
  it("Valid group letter", async done => {
    const response = await request.get("/groupMatchPrediction/Test User 1");

    expect(response.status).toBe(200);
    done();
  });
});
