const solution = require("../../level2/영어번역기");

describe("영어번역기", () => {
  test("case 1", () => {
    expect(
      solution(3, [
        "tank",
        "kick",
        "know",
        "wheel",
        "land",
        "dream",
        "mother",
        "robot",
        "tank",
      ])
    ).toEqual([3, 3]);
  });
  test("case 2", () => {
    expect(
      solution(5, [
        "hello",
        "observe",
        "effect",
        "take",
        "either",
        "recognize",
        "encourage",
        "ensure",
        "establish",
        "hang",
        "gather",
        "refer",
        "reference",
        "estimate",
        "executive",
      ])
    ).toEqual([0, 0]);
  });
  test("case 3", () => {
    expect(
      solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
    ).toEqual([1, 3]);
  });
});
