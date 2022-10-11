function solution(arr) {
  let i = arr.length - 1;
  while (i !== 0) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    i--;
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15, 8, 4];
console.log(solution(arr));
