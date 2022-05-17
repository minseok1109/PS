function solution(arr1, arr2) {
  let answer = [];

  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      answer.push(arr1.shift());
    } else if (arr1[0] > arr2[0]) {
      answer.push(arr2.shift());
    } else if (arr1[0] === arr2[0]) {
      answer.push(arr1.shift());
      answer.push(arr2.shift());
    }
  }

  if (arr1.length !== 0) {
    answer.push(arr1);
  } else if (arr2.length !== 0) {
    answer.push(arr2);
  }

  return answer.flat();
}

let a = [2, 3, 6, 7, 9];
let b = [1, 3, 5];
solution(a, b);
console.log(solution(a, b));
