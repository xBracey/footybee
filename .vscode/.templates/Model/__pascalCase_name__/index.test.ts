import {
	add{{pascalCase name}},
	add{{pascalCase name}}s,
	get{{pascalCase name}},
	get{{pascalCase name}}s,
	getAll{{pascalCase name}}s,
	delete{{pascalCase name}},
} from "../../services";

describe("Get {{camelCase name}}", () => {
	it("Valid {{camelCase name}} name", async done => {
		const { {{camelCase name}} } = await get{{pascalCase name}}("Test {{pascalCase name}} 1");
		const name = {{camelCase name}}.get("id", { plain: true });

		expect(name).toEqual("Test {{pascalCase name}} 1");
		done();
	});

	it("Invalid {{camelCase name}} name", async done => {
		const { {{camelCase name}} } = await get{{pascalCase name}}("Incorrect {{pascalCase name}} 1");

		expect({{camelCase name}}).toBeNull();
		done();
	});
});

describe("Get {{camelCase name}}s", () => {
	it("Valid {{camelCase name}}s name", async done => {
		const { {{camelCase name}}s } = await get{{pascalCase name}}s(["Test {{pascalCase name}} 1", "Test {{pascalCase name}} 2"]);

		expect({{camelCase name}}s).toHaveLength(2);
		done();
	});

	it("Invalid {{camelCase name}}s name", async done => {
		const { {{camelCase name}}s } = await get{{pascalCase name}}s([
			"Incorrect {{camelCase name}} 1",
			"Incorrect {{camelCase name}} 2",
		]);

		expect({{camelCase name}}s).toHaveLength(0);
		done();
	});
});

describe("Get all {{camelCase name}}s", () => {
	it("Valid", async done => {
		const { {{camelCase name}}s } = await getAll{{pascalCase name}}s();

		expect({{camelCase name}}s.length).toBeGreaterThan(1);
		done();
	});
});

describe("Add {{camelCase name}}", () => {
	it("Valid {{camelCase name}}", async done => {
		const { {{camelCase name}} } = await add{{pascalCase name}}({
			id: "Test {{pascalCase name}} 3",
		});

		const name = {{camelCase name}}.get("", { plain: true });

		expect(name).toEqual("Test {{pascalCase name}} 3");
		done();
	});

	it("Duplicate {{camelCase name}} name", async done => {
		const { error } = await add{{pascalCase name}}({
			id: "Test {{pascalCase name}} 1",
		});

		expect(error.message).toEqual("Primary Key duplicate");
		done();
	});
});

describe("Add {{camelCase name}}s", () => {
	it("Valid {{camelCase name}}s", async done => {
		const { {{camelCase name}}s } = await add{{pascalCase name}}s([
			{
				id: "Test {{pascalCase name}} 4",
			},
			{
				id: "Test {{pascalCase name}} 5",
			}
		]);

		expect({{camelCase name}}s).toHaveLength(2);
		done();
	});

	it("Duplicate {{camelCase name}} names", async done => {
		const { error } = await add{{pascalCase name}}s([
			{
				id: "Test {{pascalCase name}} 1",
			},
			{
				id: "Test {{pascalCase name}} 2",
			}
		]);

		expect(error.message).toEqual("Primary Key duplicate");
		done();
	});
});

describe("Delete {{camelCase name}}", () => {
	it("Valid {{camelCase name}} name", async done => {
		const { error } = await delete{{pascalCase name}}("Test {{pascalCase name}} Delete");

		expect(error).toBeUndefined();
		done();
	});

	it("Invalid {{camelCase name}} name", async done => {
		const { error } = await delete{{pascalCase name}}("Incorrect {{pascalCase name}}");

		expect(error.message).toEqual("Primary Key not found when deleting entity");
		done();
	});
});
