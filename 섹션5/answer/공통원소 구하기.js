function solution(arr1, arr2) {
  return arr1.filter((ele) => arr2.includes(ele));
}

let a = [2, 3, 9, 5, 1];
let b = [9, 2, 5, 1, 8];
console.log(solution(a, b));
