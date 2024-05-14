import { sum } from "../Sum";

test("calculate Sum", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
