import { sum } from "./sum";

// toBe
it("１と２を足すと３になる", () => {
  expect(sum(1, 2)).toBe(3);
});
