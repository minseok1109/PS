// 내가 한거 : 3.6ms
// console.time("code start");
// function solution(s, t) {
//   let count = 0;
//   let t_map = [...t].reduce((acc, curr) => {
//     return acc.has(curr) ? acc.set(curr, acc.get(curr) + 1) : acc.set(curr, 1);
//   }, new Map());
//
//   let temp = "";
//   for (let i = 0; i < t.length; i++) {
//     temp += s[i];
//   }
//
//   for (let i = t.length; i <= s.length; i++) {
//     let copy_map = new Map(t_map);
//
//     if (compare(temp, copy_map)) ++count;
//     temp = temp.slice(1);
//     temp = [...temp, s[i]];
//     console.log(temp);
//   }
//   return count;
// }
//
// const compare = (arr, map) => {
//   for (let x of arr) {
//     if (!map.has(x) || map.get(x) === 0) return false;
//     if (map.get(x) !== 0) map.set(x, map.get(x) - 1);
//   }
//   return true;
// };
//
// let a = "bacaAacba";
// let b = "abc";
//
// console.log(solution(a, b));
// console.timeEnd("code start");

console.time("start");
const compareMap = (sH, tH) => {
  if (sH.size !== tH.size) return false;
  for (let [key, value] of tH) {
    if (sH.get(key) !== value || !sH.has(key)) return false;
  }
  return true;
};

function solution(s, t) {
  let lt = 0;
  let answer = 0;
  //tH Map 생성
  let tH = new Map();
  for (let x of t) {
    tH.has(x) ? tH.set(x, tH.get(x) + 1) : tH.set(x, 1);
  }
  //비교문자 길이 -1
  let len = t.length - 1;

  //비교길이 -1만큼 처음 Map 생성
  let sH = new Map();
  for (let i = 0; i < len; i++) {
    sH.has(s[i]) ? sH.set(s[i], sH.get(s[i]) + 1) : sH.set(s[i], 1);
  }

  for (let rt = len; rt < s.length; rt++) {
    sH.has(s[rt]) ? sH.set(s[rt], sH.get(s[rt]) + 1) : sH.set(s[rt], 1);
    if (compareMap(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";

console.log(solution(a, b));
console.timeEnd("start");
