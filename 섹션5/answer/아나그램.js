function solution(str1, str2) {
  let answer = "YES";

  let A_map = [...str1].reduce((acc, curr) => {
    return acc.has(curr) ? acc.set(curr, acc.get(curr) + 1) : acc.set(curr, 1);
  }, new Map());

  for (let x of str2) {
    if (!A_map.has(x) || A_map.get(x) === 0) return "NO";
    if (A_map.get(x) !== 0) A_map.set(x, A_map.get(x) - 1);
  }
  return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
