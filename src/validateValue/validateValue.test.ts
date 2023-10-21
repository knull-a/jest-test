import { validateValue } from "./validateValue";

describe("Value validation", () => {
  test("Correct", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("Less than correct", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("More than correct", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("Boundary value (minimum)", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("Boundary value (maximum)", () => {
    expect(validateValue(100)).toBe(true);
  });
});
