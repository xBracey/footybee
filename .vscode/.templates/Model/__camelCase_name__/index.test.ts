import {
	add{{camelCase name}},
	add{{camelCase name}}s,
	get{{camelCase name}},
	get{{camelCase name}}s,
	getAll{{camelCase name}}s,
	delete{{camelCase name}},
} from "../../services";

describe("Get {{camelCase name}}", () => {
	it("Valid {{camelCase name}} name", async done => {
		const { {{camelCase name}} } = await get{{camelCase name}}();
		const name = {{camelCase name}}.get("", { plain: true });

		expect(name).toEqual("Silver");
		done();
	});

	it("Invalid {{camelCase name}} name", async done => {
		const { {{camelCase name}} } = await get{{camelCase name}}();

		expect({{camelCase name}}).toBeNull();
		done();
	});
});

describe("Get {{camelCase name}}s", () => {
	it("Valid {{camelCase name}}s name", async done => {
		const { {{camelCase name}}s } = await get{{camelCase name}}s();

		expect({{camelCase name}}s).toHaveLength(2);
		done();
	});

	it("Invalid {{camelCase name}}s name", async done => {
		const { {{camelCase name}}s } = await get{{camelCase name}}s();

		expect({{camelCase name}}s).toHaveLength(0);
		done();
	});
});

describe("Get all {{camelCase name}}s", () => {
	it("Valid", async done => {
		const { {{camelCase name}}s } = await getAll{{camelCase name}}s();

		expect({{camelCase name}}s.length).toBeGreaterThan(1);
		done();
	});
});

describe("Add {{camelCase name}}", () => {
	it("Valid {{camelCase name}}", async done => {
		const { {{camelCase name}} } = await add{{camelCase name}}({
		
		});

		const name = {{camelCase name}}.get("", { plain: true });

		expect(name).toEqual("Bronze");
		done();
	});

	it("Duplicate {{camelCase name}} name", async done => {
		const { error } = await add{{camelCase name}}({
	
		});

		expect(error.message).toEqual("Primary Key duplicate");
		done();
	});
});

describe("Add {{camelCase name}}s", () => {
	it("Valid {{camelCase name}}s", async done => {
		const { {{camelCase name}}s } = await add{{camelCase name}}s([
	
		]);

		expect({{camelCase name}}s).toHaveLength(2);
		done();
	});

	it("Duplicate {{camelCase name}} names", async done => {
		const { error } = await add{{camelCase name}}s([

		]);

		expect(error.message).toEqual("Primary Key duplicate");
		done();
	});
});

describe("Delete {{camelCase name}}", () => {
	it("Valid {{camelCase name}} name", async done => {
		const { error } = await delete{{camelCase name}}("Diamond");

		expect(error).toBeUndefined();
		done();
	});

	it("Invalid {{camelCase name}} name", async done => {
		const { error } = await delete{{camelCase name}}("Diamond");

		expect(error.message).toEqual("Primary Key not found when deleting entity");
		done();
	});
});
