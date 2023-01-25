const solution = require("../햄버거만들기");

describe("햄버거만들기", () => {
  test("case 1", () => {
    expect(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])).toEqual(2);
  });

  test("case 2", () => {
    expect(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])).toEqual(0);
  });
});
