import { reducePairings } from "./reducePairings";

describe("Test Reduce Pairings", () => {
  it("Empty array", () => {
    const reduced = reducePairings([]);
    expect(reduced).toEqual([]);
  });

  it("One pair", () => {
    const reduced = reducePairings([{ a: "a", b: "b" }]);
    expect(reduced).toEqual([["a", "b"]]);
  });

  it("Two pairs", () => {
    const reduced = reducePairings([
      { a: "a", b: "b" },
      { a: "b", b: "c" },
    ]);
    expect(reduced).toEqual([["a", "b", "c"]]);
  });

  it("Two pairs diff", () => {
    const reduced = reducePairings([
      { a: "a", b: "b" },
      { a: "c", b: "d" },
    ]);
    expect(reduced).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it("Three pairs, two same", () => {
    const reduced = reducePairings([
      { a: "a", b: "b" },
      { a: "a", b: "c" },
      { a: "d", b: "e" },
    ]);
    expect(reduced).toEqual([
      ["a", "b", "c"],
      ["d", "e"],
    ]);
  });

  it("Three pairs, all same", () => {
    const reduced = reducePairings([
      { a: "a", b: "b" },
      { a: "a", b: "c" },
      { a: "b", b: "d" },
    ]);
    expect(reduced).toEqual([["a", "b", "c", "d"]]);
  });
});
