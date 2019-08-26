// eslint-disable-next-line import/no-unresolved
const prism = require("./prism_urbanog");

describe("Tests for prism 1", () => {

  const testPrism = new prism(1, 2, 3);
  test("Return width", () => {
    expect(testPrism.width).toBe(3);
  });
  test("Output is nunmber", () => {
    expect(typeof testPrism.width).toBe('number');
  });
  test("Return long", () => {
    expect(testPrism.long).toBe(1);
  });
  test("Return height", () => {
    expect(testPrism.height).toBe(2);
  });
  test("Perimeter of the prism", () => {
    expect(testPrism.perimeter()).toBe(8);
  });
  test("Area of prism ", () => {
    expect(testPrism.area()).toBe(3);
  });
  test("Volume of prism ", () => {
    expect(testPrism.volume()).toBe(6);
  });
});
describe("Tests for prism 2", () => {
  const testPrism2 = new prism(2, 1, 1);
  test("Return width", () => {
    expect(testPrism2.width).toBe(1);
  });
  test("Return long", () => {
    expect(testPrism2.long).toBe(2);
  });
  test("Return height", () => {
    expect(testPrism2.height).toBe(1);
  });
  test("Perimeter of the prism", () => {
    expect(testPrism2.perimeter()).toBe(6);
  });
  test("Area of prism ", () => {
    expect(testPrism2.area()).toBe(2);
  });
  test("Volume of prism ", () => {
    expect(testPrism2.volume()).toBe(2);
  });
});
