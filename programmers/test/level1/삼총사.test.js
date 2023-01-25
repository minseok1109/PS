const solution = require("../삼총사");

describe("삼총사", () => {
  test("case 1", () => {
    expect(solution([-2, 3, 0, 2, -5])).toEqual(2);
  });

  test("case 2", () => {
    expect(solution([-3, -2, -1, 0, 1, 2, 3])).toEqual(5);
  });

  test("case 3", () => {
    expect(solution([-1, 1, -1, 1])).toEqual(0);
  });
});
