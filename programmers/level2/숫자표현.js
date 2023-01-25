function solution(n) {
  let count = 1;
  for (let i = 1; i < n; i++) {
    let sum = 0;
    let temp = i;
    while (sum <= n) {
      sum += temp;
      temp++;
      if (sum === n) {
        count++;
        break;
      }
    }
  }
  return count;
}

module.exports = solution;
