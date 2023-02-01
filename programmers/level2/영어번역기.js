function solution(n, words) {
  let round = 1;
  let dict = {};
  dict[words[0]] = 1;
  console.log(dict);
  let temp = 0;
  for (let i = 1; i < words.length; i++) {
    if (i % n === 0) round++;
    let lastWord = words[i - 1].charAt(words[i - 1].length - 1);
    let firstWord = words[i].charAt(0);
    dict[words[i]] = ++dict[words[i]] || 1;
    if (lastWord !== firstWord) {
      temp = (i % n) + 1;
      break;
    }

    if (dict[words[i]] > 1) {
      temp = (i % n) + 1;
      break;
    }
  }
  if (temp === 0) {
    round = 0;
  }
  return [temp, round];
}

module.exports = solution;
