//내 풀이 3.5ms
// console.time("code measure");
// function solution(k, arr) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i + k <= arr.length) {
//       let max = arr.slice(i, i + k).reduce((a, b) => a + b, 0);
//       answer.push(max);
//     }
//   }
//   return Math.max(...answer);
// }

// let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));
// console.timeEnd("code measure");

//강의 듣고 풀이 2.506ms
console.time("code measure");
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
console.timeEnd("code measure");
