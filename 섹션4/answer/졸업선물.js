function solution(m, product) {
  let answer = [];
  let n = product.length;
  product.sort((a, b) => {
    if (a[0] + a[1] < b[0] + b[1]) {
      return -1;
    }
  });

  for (let i = 0; i < n; i++) {
    let count = 1;
    let money = m - (product[i][0] / 2 + product[i][1]);
    for (let j = 0; j < n; j++) {
      if (i !== j && product[j][0] + product[j][1] <= money) {
        count++;
        money -= product[j][0] + product[j][1];
      }
    }
    answer.push(count);
  }
  return Math.max(...answer);
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
