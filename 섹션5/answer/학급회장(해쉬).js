function solution(s) {
  let answer = "";
  let map = new Map();
  let max = 0;

  [...s].reduce(function (acc, curr) {
    return map.has(curr) ? map.set(curr, map.get(curr) + 1) : map.set(curr, 1);
  }, map);

  for ([key, val] of map) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
