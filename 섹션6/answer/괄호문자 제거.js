function solution(s) {
  let count = 0;
  let answer = [];

  for (let i of s) {
    if (i === "(") {
      count++;
      continue;
    } else if (i === ")") {
      count--;
      continue;
    }
    if (count === 0) {
      answer.push(i);
      continue;
    } else {
      continue;
    }
  }
  return answer.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
