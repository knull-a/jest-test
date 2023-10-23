import useSquare from "./useSquare";

describe("Square", () => {
  let mockValue = 0;

  beforeAll(() => {
    mockValue = Math.random();
  });

  test("Hardcode", () => {
    expect(useSquare(50)).toBe(2500);
    expect(useSquare(20)).toBeGreaterThan(399);
    expect(useSquare(20)).toBeLessThan(401);
  });

  test("Math Random", () => {
    expect(useSquare(mockValue)).toEqual(mockValue * mockValue);
  });

  test("Math spy ain't called", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    useSquare(1);
    expect(spyMathPow).not.toBeCalled();
  });

  test("Math spy called", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    useSquare(2);
    expect(spyMathPow).toBeCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
