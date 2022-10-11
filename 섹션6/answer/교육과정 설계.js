function solution(need, plan) {
  let answer = "YES";
  let arr_need = [...need];
  let queue = [];
  while (arr_need.length !== 0) queue.push(plan.indexOf(arr_need.shift()));
  if (queue.includes(-1)) return "NO";
  for (let i = 1; i < queue.length; i++) {
    if (queue[i] < queue[i - 1]) {
      answer = "NO";
    }
  }
  return answer;
}

let a = "CBAD";
let b = "CBGAED";
console.log(solution(a, b));
