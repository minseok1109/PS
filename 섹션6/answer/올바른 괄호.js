function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    if (x === ")" && stack.length !== 0) stack.pop();
  }

  if (stack.length !== 0) return "NO";
  return answer;
}

let a = "()()()";
console.log(solution(a));
