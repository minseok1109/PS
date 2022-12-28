function solution(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    let min = j;
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    let tmp = arr[min];
    arr[min] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
module.exports;
