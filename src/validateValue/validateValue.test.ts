import { validateValue } from "./validateValue";

test("Value validation", () => {
  expect(validateValue(50)).toBe(true);
});
