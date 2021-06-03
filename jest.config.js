const tsPreset = require("ts-jest/jest-preset");
const puppeteerPreset = require("jest-puppeteer/jest-preset");

module.exports = {
  ...tsPreset,
  ...puppeteerPreset,
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  globalSetup: "jest-environment-puppeteer/setup",
  globalTeardown: "jest-environment-puppeteer/teardown",
  testEnvironment: "jest-environment-puppeteer",
};
