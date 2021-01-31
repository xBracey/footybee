process.env.NODE_ENV = "test";
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.test");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/.*.vscode.*/", "/.*.cache.*/"],
  globalSetup: "./tests/jest.setup.ts",
  globalTeardown: "./tests/jest.teardown.ts",
  collectCoverageFrom: [
    "src/api/**/*.{ts,tsx}",
    "!src/api/passport/**/*",
    "!src/api/seeders/**/*.ts",
    "!src/api/index.ts",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  moduleFileExtensions: ["ts", "js"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
};
