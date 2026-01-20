
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",

  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json"
      },
    ],
  },

  moduleNameMapper: {
    "/^.+\.module\.(css|scss|sass)$/": "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "<rootDir>src/test/__mocks__/styleMock.js",
    "\\.(png|jpg|jpeg|gif|webp|svg)$": "<rootDir>src/test/__mocks__/fileMock.js",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
  },
  "resolver": undefined,

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
