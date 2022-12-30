function solution(babbling) {
  let double = ["aya", "ye", "woo", "ma"].map((ele) => ele.repeat(2));
  let count = 0;
  while (babbling.length) {
    let check = babbling.shift();
    if (double.some((item) => check.includes(item))) continue;
    c = check
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");
    if (Number(c)) count++;
  }
  return count;
}

module.exports = solution;
