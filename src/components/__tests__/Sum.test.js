import { sum } from "../Sum";
test("calculate sum", () => {
  const result = sum(3, 4);
  //ASSERTION
  expect(result).toBe(7);
});
