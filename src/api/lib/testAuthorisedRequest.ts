import supertest from "supertest";
import { testApp } from "..";

export const testAuthorisedRequest = async (url: string) => {
  const agent = supertest.agent(testApp);

  const loginResponse = await agent
    .post("/user/login")
    .send({ username: "test", password: "test" });

  return agent.get(url).set("Authorization", `Bearer ${loginResponse.text}`);
};
