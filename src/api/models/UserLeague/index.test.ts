// import {
// 	addUserLeague,
// 	addUserLeagues,
// 	getUserLeague,
// 	getUserLeagues,
// 	getAllUserLeagues,
// 	deleteUserLeague,
// } from "../../services";

// describe("Get userLeague", () => {
// 	it("Valid userLeague name", async done => {
// 		const { userLeague } = await getUserLeague("Test UserLeague 1");
// 		const name = userLeague.get("id", { plain: true });

// 		expect(name).toEqual("Test UserLeague 1");
// 		done();
// 	});

// 	it("Invalid userLeague name", async done => {
// 		const { userLeague } = await getUserLeague("Incorrect UserLeague 1");

// 		expect(userLeague).toBeNull();
// 		done();
// 	});
// });

// describe("Get userLeagues", () => {
// 	it("Valid userLeagues name", async done => {
// 		const { userLeagues } = await getUserLeagues(["Test UserLeague 1", "Test UserLeague 2"]);

// 		expect(userLeagues).toHaveLength(2);
// 		done();
// 	});

// 	it("Invalid userLeagues name", async done => {
// 		const { userLeagues } = await getUserLeagues([
// 			"Incorrect userLeague 1",
// 			"Incorrect userLeague 2",
// 		]);

// 		expect(userLeagues).toHaveLength(0);
// 		done();
// 	});
// });

// describe("Get all userLeagues", () => {
// 	it("Valid", async done => {
// 		const { userLeagues } = await getAllUserLeagues();

// 		expect(userLeagues.length).toBeGreaterThan(1);
// 		done();
// 	});
// });

// describe("Add userLeague", () => {
// 	it("Valid userLeague", async done => {
// 		const { userLeague } = await addUserLeague({
// 			id: "Test UserLeague 3",
// 		});

// 		const name = userLeague.get("id", { plain: true });

// 		expect(name).toEqual("Test UserLeague 3");
// 		done();
// 	});

// 	it("Duplicate userLeague name", async done => {
// 		const { error } = await addUserLeague({
// 			id: "Test UserLeague 1",
// 		});

// 		expect(error.message).toEqual("Primary Key duplicate");
// 		done();
// 	});
// });

// describe("Add userLeagues", () => {
// 	it("Valid userLeagues", async done => {
// 		const { userLeagues } = await addUserLeagues([
// 			{
// 				id: "Test UserLeague 4",
// 			},
// 			{
// 				id: "Test UserLeague 5",
// 			}
// 		]);

// 		expect(userLeagues).toHaveLength(2);
// 		done();
// 	});

// 	it("Duplicate userLeague names", async done => {
// 		const { error } = await addUserLeagues([
// 			{
// 				id: "Test UserLeague 1",
// 			},
// 			{
// 				id: "Test UserLeague 2",
// 			}
// 		]);

// 		expect(error.message).toEqual("Primary Key duplicate");
// 		done();
// 	});
// });

// describe("Delete userLeague", () => {
// 	it("Valid userLeague name", async done => {
// 		const { error } = await deleteUserLeague("Test UserLeague Delete 1");

// 		expect(error).toBeUndefined();
// 		done();
// 	});

// 	it("Invalid userLeague name", async done => {
// 		const { error } = await deleteUserLeague("Incorrect UserLeague");

// 		expect(error.message).toEqual("Primary Key not found when deleting entity");
// 		done();
// 	});
// });
