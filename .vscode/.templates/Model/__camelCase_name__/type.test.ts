import { isValid{{camelCase name}}, isValidGet{{camelCase name}} } from "./type";

describe("Test isValid{{camelCase name}}", () => {
  it("Valid", async done => {
    const valid{{camelCase name}} = isValid{{camelCase name}}({
    });
    expect(valid{{camelCase name}}).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const valid{{camelCase name}} = isValid{{camelCase name}}({
    });

    expect(valid{{camelCase name}}).toBe(false);
    done();
  });
});
