const solution = require("../과일장수");

describe("과일장수", () => {
  test("case1", () => {
    expect(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])).toEqual(8);
  });

  test("case2", () => {
    expect(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])).toEqual(33);
  });
});
