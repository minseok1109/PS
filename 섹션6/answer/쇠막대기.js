function solution(s) {
  let stack = [];
  let answer = 0;
  for (let i in s) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }
  return answer;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
