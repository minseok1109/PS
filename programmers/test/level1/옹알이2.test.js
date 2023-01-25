const solution = require("../옹알이2");

describe("옹알이2", () => {
  test("case 1", () => {
    expect(solution(["aya", "yee", "u", "maa"])).toEqual(1);
  });

  test("case 2", () => {
    expect(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])).toEqual(2);
  });
});
