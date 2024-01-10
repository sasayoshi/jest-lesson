import { sum } from "./sum";

// // toBe
// it("１と２を足すと３になる", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// it("１と-10を足すと-9になる", () => {
//   expect(sum(1, -10)).toBe(-9);
// });

it.each`
  a    | b      | expected
  ${1} | ${2}   | ${3}
  ${1} | ${-10} | ${-9}
`("$aと$bを足すと$expectedになる", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});
