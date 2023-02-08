const solution = require("../../level2/멀리뛰기");

describe("멀리뛰기", () => {
  test("case 1", () => {
    expect(solution(4)).toEqual(5);
  });
  test("case 2", () => {
    expect(solution(3)).toEqual(3);
  });
});
