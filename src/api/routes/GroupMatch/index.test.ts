import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create groupMatch endpoint", () => {
  it("Valid groupMatch", async done => {
    const response = await request
      .post("/groupMatch/create")
      .send({
        date: "2021-06-11T19:42:50.000Z",
        homeTeam: "Test Team 1",
        awayTeam: "Test Team 2",
        groupLetter: "Test Group 1",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/groupMatch/create")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/groupMatch/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/groupMatch/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test bulk create groupMatch endpoint", () => {
  it("Valid groupMatchs", async done => {
    const response = await request
      .post("/groupMatch/bulk-create")
      .send({
        groupMatches: [
          {
            date: new Date(),
            homeTeam: "Test Team 1",
            awayTeam: "Test Team 2",
            groupLetter: "Test Group 1",
          },
          {
            date: new Date(),
            homeTeam: "Test Team 1",
            awayTeam: "Test Team 2",
            groupLetter: "Test Group 1",
          },
        ],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/groupMatch/bulk-create")
      .send([{ fefefe: "fefefefe" }])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Invalid array", async done => {
    const response = await request
      .post("/groupMatch/bulk-create")
      .send([])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Wrong Data type", async done => {
    const response = await request
      .post("/groupMatch/bulk-create")
      .send({ fefe: "fefef" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test delete groupMatch endpoint", () => {
  it("Valid groupMatch name", async done => {
    const response = await request.delete(
      "/groupMatch/Test Group Match Delete 2"
    );

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid groupMatch name", async done => {
    const response = await request.delete("/groupMatch/fewfewfewfewfew");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Group Match ID does not exist");
    done();
  });
});

describe("Test get groupMatch from groups endpoint", () => {
  it("Valid group letter", async done => {
    const response = await request.get("/groupMatch/group/Test Group 2");

    expect(response.status).toBe(200);
    done();
  });
});
