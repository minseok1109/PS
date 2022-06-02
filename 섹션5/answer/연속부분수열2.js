//강의 듣기 전 내 풀이
// function solution(m, arr) {
//   let n = arr.length;
//   let answer = 0;
//   let sumAll = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       if (i + j > n) {
//         break;
//       } else {
//         if (sum(arr.slice(j, i + j)) <= m) answer++;
//       }
//     }
//   }
//   return answer;
// }
//
// function sum(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }
//
// let a = [1, 3, 1, 2, 3];
// console.log(solution(5, a));

//강의 듣고 난 후 풀이
function solution(m, arr) {
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt <= arr.length; rt++) {
    sum += arr[rt];
  }
}
let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
