const kSum = require("./ksum");

const output = "131151201344081895336534324866";
const output2 = "100";

describe("Ksum test", () => {
  test("expect results", () => {
    expect(kSum("131151201344081895330000000000", "0006534324866")).toBe(
      output
    );
    expect(kSum("99", "1")).toBe(output2);
  });
});

describe("Our Ksum tests", () => {
  test("Output must be a number", () => {
    expect(typeof kSum("5", "6")).toBe("string");
    expect(typeof kSum("255", "700")).toBe("string");
  });

  test("Sum of numbers", () => {
    expect(kSum("5", "6")).toBe("11");
    expect(kSum("255", "700")).toBe("955");
    expect(kSum("1914896", "789452")).toBe("2704348");
  });

  test("Intput must contain character from 0 to 9", () => {
    expect(kSum("8sdf", "3we")).toEqual(["8sdf", "3we"]);
    expect(kSum("hola", "amigo!!")).toEqual(["hola", "amigo!!"]);
    expect(kSum("HastaLaVista", "Baby")).toEqual(["HastaLaVista", "Baby"]);
  });
});
