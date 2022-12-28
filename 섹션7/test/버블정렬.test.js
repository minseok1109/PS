const solution = require("../answer/버블정렬");

describe("버블정렬", () => {
  test("case1", () => {
    expect(solution([13, 5, 11, 7, 23, 15])).toEqual([5, 7, 11, 13, 15, 23]);
  });
});
