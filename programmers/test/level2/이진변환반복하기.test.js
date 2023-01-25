const solution = require("../../level2/이진변환반복하기");
describe("이진변환반복하기", () => {
  test("case 1", () => {
    expect(solution("110010101001")).toStrictEqual([3, 8]);
  });

  test("case 2", () => {
    expect(solution("01110")).toStrictEqual([3, 3]);
  });
  test("case 1", () => {
    expect(solution("1111111")).toStrictEqual([4, 1]);
  });
});
