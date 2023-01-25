function solution(food) {
  let foodCount = food.splice(1, food.length).reduce((acc, curr, index) => {
    let count = Math.floor(curr / 2);
    return acc.concat(String(index + 1).repeat(count));
  }, "");
  return foodCount + "0" + [...foodCount].reverse().join("");
}

module.exports = solution;
