/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

/* eslint-disable import/no-extraneous-dependencies */
import "regenerator-runtime/runtime";
import {
  downLoad_notebook,
  load_package,
  load_notebook,
  load_csv,
} from "../utils";

const cellState = {
  cells: [{ id: "cell_1", input: "", output: "", type: "code" }],
};

// FIXME: make blob work with jest;
describe("Download notebook test", () => {
  global.URL.createObjectURL = jest.fn();

  it("it should download notebook", async () => {
    const downloadUrl = downLoad_notebook(cellState);
  });
});

describe("Load packages into notebook", () => {
  beforeAll(() => {
    page.goto("http://localhost:3000/demo");
  });
  const validPackages = [
    "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest",
    "https://cdn.plot.ly/plotly-latest.min.js",
  ];
  const inValidPackages = [
    "https://cdn.invalid.com",
    "https://cdn.invalid-latest.ly",
  ];
  it("it should load package successfully", async () => {
    const loadPackage = load_package(validPackages);
  });
});
