import supertest from "supertest";

import { testApp } from "../../";

const request = supertest(testApp);

describe("Test create group endpoint", () => {
  it("Valid group", async done => {
    const response = await request
      .post("/group/create")
      .send({
        letter: "Test Group 10",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate group", async done => {
    const response = await request
      .post("/group/create")
      .send({
        letter: "Test Group 1",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("Group letter already exists");
    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/group/create")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/group/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/group/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test bulk create group endpoint", () => {
  it("Valid groups", async done => {
    const response = await request
      .post("/group/bulk-create")
      .send({
        groups: [
          {
            letter: "Test Group 11",
          },
          {
            letter: "Test Group 12",
          },
        ],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate group", async done => {
    const response = await request
      .post("/group/bulk-create")
      .send({
        groups: [
          {
            letter: "Test Group 13",
          },
          {
            letter: "Test Group 1",
          },
        ],
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/group/bulk-create")
      .send([{ fefefe: "fefefefe" }])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Invalid array", async done => {
    const response = await request
      .post("/group/bulk-create")
      .send([])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Wrong Data type", async done => {
    const response = await request
      .post("/group/bulk-create")
      .send({ fefe: "fefef" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test delete group endpoint", () => {
  it("Valid group name", async done => {
    const component = `/group/${encodeURIComponent("Test Group Delete 2")}`;

    const response = await request.delete(component);

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid group name", async done => {
    const response = await request.delete("/group/fewfewfewfewfew");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Group letter does not exist");
    done();
  });
});
