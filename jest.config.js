module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // to be able to use window.React, or use 'node' instead with /** *@jest-environment jsdom */ in a test file
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(less)": "identity-obj-proxy", // when css modules used
    "^@/(.*)": "<rootDir>/src/$1",
    "^@components(.*)": "<rootDir>/src/shared/$1",
    "^@store(.*)": "<rootDir>/src/store/$1",
    "^@utils(.*)": "<rootDir>/src/utils/$1",
  },
  transform: {
    "\\.(js|ts|tsx)?$": "ts-jest", // to be able to use JS-files
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};