function solution(s) {
  let count = 0;
  let call = 0;
  while (true) {
    let [count0, count1] = countOfOneOrZero(s);
    count += count0;
    call++;
    s = count1.toString(2);
    if (s === "1") break;
  }
  return [call, count];
}

function countOfOneOrZero(str) {
  let obj = {};
  for (const num of str) {
    obj[num] = ++obj[num] || 1;
  }
  for (const num of ["0", "1"]) {
    if (obj[num] === undefined) obj[num] = 0;
  }
  return [obj["0"], obj["1"]];
}

module.exports = solution;
