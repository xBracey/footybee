import supertest from "supertest";

import app from "../../";

const request = supertest(app);

describe("Test create {{camelCase name}} endpoint", () => {
  it("Valid {{camelCase name}}", async done => {
    const response = await request
      .post("/{{camelCase name}}/create")
      .send({})
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate {{camelCase name}}", async done => {
    const response = await request
      .post("/{{camelCase name}}/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("{{camelCase name}} name already exists");
    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/{{camelCase name}}/create")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/{{camelCase name}}/create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/{{camelCase name}}/create")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test bulk create {{camelCase name}} endpoint", () => {
  it("Valid {{camelCase name}}s", async done => {
    const response = await request
      .post("/{{camelCase name}}/bulk-create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate {{camelCase name}}", async done => {
    const response = await request
      .post("/{{camelCase name}}/bulk-create")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(409);

    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/{{camelCase name}}/bulk-create")
      .send([{ fefefe: "fefefefe" }])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Invalid array", async done => {
    const response = await request
      .post("/{{camelCase name}}/bulk-create")
      .send([])
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("Wrong Data type", async done => {
    const response = await request
      .post("/{{camelCase name}}/bulk-create")
      .send({ fefe: "fefef" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test delete {{camelCase name}} endpoint", () => {
  it("Valid {{camelCase name}} name", async done => {
    const response = await request.delete("/{{camelCase name}}/test");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      "{{camelCase name}} successfully deleted"
    );
    done();
  });

  it("Invalid {{camelCase name}} name", async done => {
    const response = await request.delete(
      "/{{camelCase name}}/fewfewfewfewfew"
    );

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("{{camelCase name}} does not exist");
    done();
  });
});
