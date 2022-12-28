function solution(k, m, score) {
  return score
    .sort((a, b) => b - a)
    .reduce((acc, curr, index) => {
      if ((index + 1) % m === 0) {
        return (acc += curr * m);
      }
      return acc;
    }, 0);
}

module.exports = solution;
