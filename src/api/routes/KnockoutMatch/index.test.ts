import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create knockoutMatch endpoint", () => {
  it("Valid knockoutMatch", async done => {
    const response = await request
      .post("/knockoutMatch/create")
      .send({
        date: "2021-06-11T19:42:50.000Z",
        homeTeam: "Test Team 1",
        awayTeam: "Test Team 2",
        roundName: "Test Round 1",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/knockoutMatch/create")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/knockoutMatch/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/knockoutMatch/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test bulk create knockoutMatch endpoint", () => {
  it("Valid knockoutMatchs", async done => {
    const response = await request
      .post("/knockoutMatch/bulk-create")
      .send({
        knockoutMatches: [
          {
            date: new Date(),
            homeTeam: "Test Team 1",
            awayTeam: "Test Team 2",
            roundName: "Test Round 1",
          },
          {
            date: new Date(),
            homeTeam: "Test Team 1",
            awayTeam: "Test Team 2",
            roundName: "Test Round 1",
          },
        ],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/knockoutMatch/bulk-create")
      .send([{ fefefe: "fefefefe" }])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Invalid array", async done => {
    const response = await request
      .post("/knockoutMatch/bulk-create")
      .send([])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Wrong Data type", async done => {
    const response = await request
      .post("/knockoutMatch/bulk-create")
      .send({ fefe: "fefef" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test delete knockoutMatch endpoint", () => {
  it("Valid knockoutMatch name", async done => {
    const response = await request.delete("/knockoutMatch/4");

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid knockoutMatch name", async done => {
    const response = await request.delete("/knockoutMatch/23242344");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Group Match ID does not exist");
    done();
  });
});
