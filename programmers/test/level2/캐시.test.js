const solution = require("../../level2/캐시");

describe("캐시", () => {
  test("case 1", () => {
    expect(
      solution(3, [
        "Jeju",
        "Pangyo",
        "Seoul",
        "NewYork",
        "LA",
        "Jeju",
        "Pangyo",
        "Seoul",
        "NewYork",
        "LA",
      ])
    ).toEqual(50);
  });
  test("case 2", () => {
    expect(
      solution(3, [
        "Jeju",
        "Pangyo",
        "Seoul",
        "Jeju",
        "Pangyo",
        "Seoul",
        "Jeju",
        "Pangyo",
        "Seoul",
      ])
    ).toEqual(21);
  });
  test("case 3", () => {
    expect(
      solution(5, [
        "Jeju",
        "Pangyo",
        "Seoul",
        "NewYork",
        "LA",
        "SanFrancisco",
        "Seoul",
        "Rome",
        "Paris",
        "Jeju",
        "NewYork",
        "Rome",
      ])
    ).toEqual(52);
  });
  test("case 4", () => {
    expect(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])).toEqual(16);
  });
  test("case 1", () => {
    expect(
      solution(3, [
        "Jeju",
        "Pangyo",
        "Seoul",
        "NewYork",
        "LA",
        "Jeju",
        "Pangyo",
        "Seoul",
        "NewYork",
        "LA",
      ])
    ).toEqual(50);
  });
});
