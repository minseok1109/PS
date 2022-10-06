function solution(n, k) {
  let queue1 = [...Array(n).keys()];
  while (queue1.length !== 1) {
    let count = 1;
    while (count !== k) {
      queue1.push(queue1.shift());
      count++;
    }
    queue1.shift();
  }
  return queue1[0] + 1;
}

console.log(solution(10, 3));
