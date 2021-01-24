import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create league endpoint", () => {
  it("Valid league", async done => {
    const response = await request
      .post("/league/create")
      .send({
        leagueName: "Test League 10",
        displayName: "Tom's League",
        password: "1234",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate league", async done => {
    const response = await request
      .post("/league/create")
      .send({
        leagueName: "Test League 1",
        displayName: "Tom's League",
        password: "1234",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("League Name already exists");
    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/league/create")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/league/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/league/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test bulk create league endpoint", () => {
  it("Valid leagues", async done => {
    const response = await request
      .post("/league/bulk-create")
      .send({
        leagues: [
          {
            leagueName: "Test League 11",
            displayName: "Tom's League",
            password: "1234",
          },
          {
            leagueName: "Test League 12",
            displayName: "Tom's League",
            password: "1234",
          },
        ],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate league", async done => {
    const response = await request
      .post("/league/bulk-create")
      .send({
        leagues: [
          {
            leagueName: "Test League 1",
            displayName: "Tom's League",
            password: "1234",
          },
          {
            leagueName: "Test League 2",
            displayName: "Tom's League",
            password: "1234",
          },
        ],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/league/bulk-create")
      .send({
        leagues: [{ fefefe: "fefefefe" }],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Invalid array", async done => {
    const response = await request
      .post("/league/bulk-create")
      .send({
        leagues: [],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Wrong Data type", async done => {
    const response = await request
      .post("/league/bulk-create")
      .send({ fefe: "fefef" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test delete league endpoint", () => {
  it("Valid league name", async done => {
    const component = `/league/${encodeURIComponent("Test League Delete 2")}`;

    const response = await request.delete(component);

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid league name", async done => {
    const response = await request.delete("/league/fewfewfewfewfew");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("League Name does not exist");
    done();
  });
});
