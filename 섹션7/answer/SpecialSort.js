function solution(arr) {
  let under = [];
  let up = [];
  for (let i of arr) {
    if (i < 0) {
      under.push(i);
    } else {
      up.push(i);
    }
  }
  return [...under, ...up];
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
