process.env.NODE_ENV = "test";

module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/.*.vscode.*/", "/.*.cache.*/"],
  globalSetup: "./tests/jest.setup.ts",
  globalTeardown: "./tests/jest.teardown.ts",
  collectCoverageFrom: ["src/api/**/*.{ts,tsx}"],
};
