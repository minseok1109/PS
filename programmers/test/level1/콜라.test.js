const solution = require("../콜라");

describe("콜라", () => {
  test("case 1", () => {
    expect(solution(2, 1, 20)).toEqual(19);
  });

  test("case 2", () => {
    expect(solution(3, 1, 20)).toEqual(9);
  });

  test("case 3", () => {
    expect(solution(3, 2, 20)).toEqual(35);
  });
});
