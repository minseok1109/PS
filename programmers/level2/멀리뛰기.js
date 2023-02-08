//다른 사람 풀이
//dp 활용문제
// 피보나치 수열을 활용해서 1과 2로 더해서 N을 만들 수 있는 경우의 수는 피보나치 수열의 N번째 숫자와 같다.
function solution(n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

module.exports = solution;
