const solution = require("../../level2/점프와순간이동");

describe("점프와순간이동.test()", () => {
  test("case 1", () => {
    expect(solution(5)).toEqual(2);
  });
  test("case 2", () => {
    expect(solution(6)).toEqual(2);
  });
  test("case 3", () => {
    expect(solution(5000)).toEqual(5);
  });
});
