import {
	validateArray,
	validateType,
	validateDate,
	validateOneExists,
} from "./validation";

describe("Test validateArray", () => {
	it("Valid", () => {
		const valid = validateArray(["test"], "string");

		expect(valid).toBe(true);
	});

	it("Invalid", () => {
		const valid = validateArray(["test"], "number");

		expect(valid).toBe(false);
	});
});

describe("Test validateType", () => {
	it("Valid(required)", () => {
		const valid = validateType("test", "string", true);

		expect(valid).toBe(true);
	});

	it("Invalid(required)", () => {
		const valid = validateType("test", "number", true);

		expect(valid).toBe(false);
	});

	it("Valid(not required)", () => {
		const valid = validateType(null, "string", false);

		expect(valid).toBe(true);
	});

	it("Invalid(not required)", () => {
		const valid = validateType("test", "number", false);

		expect(valid).toBe(false);
	});
});

describe("Test validateDate", () => {
	it("Valid(required)", () => {
		const valid = validateDate("2019-11-05T13:15:30Z", true);

		expect(valid).toBe(true);
	});

	it("Invalid(required)", () => {
		const valid = validateDate("2019-21-05T13:15:30Z", true);

		expect(valid).toBe(false);
	});

	it("Valid(not required)", () => {
		const valid = validateDate(null, false);

		expect(valid).toBe(true);
	});

	it("Invalid(not required)", () => {
		const valid = validateDate("2019-21-05T13:15:30Z", false);

		expect(valid).toBe(false);
	});
});

describe("Test validateOneExists", () => {
	it("Valid", () => {
		const valid = validateOneExists(["test", null, null]);

		expect(valid).toBe(true);
	});

	it("Invalid", () => {
		const valid = validateOneExists([null, null, null]);

		expect(valid).toBe(false);
	});
});
