function solution(need, plan) {
  let answer = "YES";
  let arr_need = [...need];
  for (let i of plan) {
    if (arr_need.includes(i)) {
      if (i !== arr_need.shift()) return "NO";
    }
  }
  if (arr_need.length > 0) return "NO";
  return answer;
}

let a = "CBAD";
let b = "CABGED";
console.log(solution(a, b));
