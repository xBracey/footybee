process.env.NODE_ENV = "test";

module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/.*.vscode.*/", "/.*.cache.*/"],
  globalSetup: "./tests/jest.setup.ts",
  globalTeardown: "./tests/jest.teardown.ts",
  collectCoverageFrom: [
    "src/api/**/*.{ts,tsx}",
    "!src/api/seeders/*.ts",
    "!src/api/index.ts",
  ],
  moduleNameMapper: {
    "components": "<rootDir>/src/site/components/index",
    "theme": "<rootDir>/src/site/theme/index",
    "lib": "<rootDir>/src/lib/index",
    "assets": "<rootDir>/src/assets/index",
  },
};
