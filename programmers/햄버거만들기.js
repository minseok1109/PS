function solution(ingredient) {
  let stack = [];
  return ingredient.reduce((acc, curr) => {
    stack.push(curr);
    if (stack.length >= 4) {
      let ham = stack.slice(-4).join("");
      if (ham === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        return ++acc;
      }
    }
    return acc;
  }, 0);
}

module.exports = solution;
