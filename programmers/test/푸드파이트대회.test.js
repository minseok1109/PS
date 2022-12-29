const solution = require("../푸드파이트대회");

describe("푸드파이트대회", () => {
  test("case 1", () => {
    expect(solution([1, 3, 4, 6])).toEqual("1223330333221");
  });
  test("case 2", () => {
    expect(solution([1, 7, 1, 2])).toEqual("111303111");
  });
});
