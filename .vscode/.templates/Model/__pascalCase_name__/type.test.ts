import { isValid{{pascalCase name}} } from "./type";

describe("Test isValid{{camelCase name}}", () => {
  it("Valid", async done => {
    const valid{{pascalCase name}} = isValid{{pascalCase name}}({
    });
    expect(valid{{pascalCase name}}).toBe(true);
    done();
  });

  it("Not Valid", async done => {
    const valid{{pascalCase name}} = isValid{{pascalCase name}}({
    });

    expect(valid{{pascalCase name}}).toBe(false);
    done();
  });
});
