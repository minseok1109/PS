function solution(n) {
  let answer = 1;
  while (n !== 1) {
    if (isOdd(n)) {
      answer++;
      n = (n - 1) / 2;
    } else {
      n = n / 2;
    }
  }
  return answer;
}

function isOdd(n) {
  if (n % 2 === 1) {
    return true;
  }
  return false;
}

//어떠한 수를 2로 계속 나눴을 때 나오는 나머지의 수의 합은 그 숫자를 이진수로 변환했을 때의 1의 갯수와 같다.
function other_solution(n) {
  if (n === 1) return 1;
  const nArr = Array.from(n.toString(2));
  return nArr.reduce((a, b) => +a + +b);
}

module.exports = solution;
