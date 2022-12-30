function solution(a, b, n) {
  let answer = [];

  while (n / a >= 1) {
    let mock = Math.floor(n / a);
    let rest = n % a;
    answer.push(mock * b);
    n = mock * b + rest;
  }
  return answer.reduce((acc, curr) => acc + curr, 0);
}

module.exports = solution;
