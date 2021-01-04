import supertest from "supertest";

import app from "../../";

const request = supertest(app);

describe("Test create user endpoint", () => {
  it("Valid user", async done => {
    const response = await request
      .post("/api/user/register")
      .send({
        username: "Test User Register 1",
        password: "password",
        email: "testregister1@test.com",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);

    done();
  });

  it("Duplicate username", async done => {
    const response = await request
      .post("/api/user/register")
      .send({
        username: "Test User Register 1",
        password: "password",
        email: "testregister2@test.com",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("Username or email already exists");
    done();
  });

  it("Duplicate email", async done => {
    const response = await request
      .post("/api/user/register")
      .send({
        username: "Test User Register 3",
        password: "password",
        email: "testregister1@test.com",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body.error).toBe("Username or email already exists");
    done();
  });

  it("Invalid body", async done => {
    const response = await request
      .post("/api/user/register")
      .send({ fefefe: "htrht" })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No body", async done => {
    const response = await request
      .post("/api/user/register")
      .send()
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });

  it("No object", async done => {
    const response = await request
      .post("/api/user/register")
      .send("Test")
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid parameters");
    done();
  });
});

describe("Test delete user endpoint", () => {
  it("Valid user name", async done => {
    const response = await request.delete("/api/user/Test User Register 1");

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid user name", async done => {
    const response = await request.delete("/api/user/fewfewfewfewfew");

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Username does not exist");
    done();
  });
});

describe("Test login endpoint", () => {
  it("Valid login", async done => {
    const response = await request
      .post("/api/user/login")
      .send({ username: "Test User 1", password: "password" })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    done();
  });

  it("Invalid login", async done => {
    const response = await request
      .post("/api/user/login")
      .send({ username: "Test User 1", password: "passwordInvalid" })
      .set("Accept", "application/json");

    expect(response.status).toBe(302);
    done();
  });
});
