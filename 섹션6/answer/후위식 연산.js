function isSign(s) {
  let pm = ["+", "-", "*", "/"];
  return pm.includes(s);
}

function solution(s) {
  let arr = [];
  for (let i of s) {
    if (!isNaN(Number(i))) {
      arr.push(Number(i));
    } else {
      let rt = arr.pop();
      let lt = arr.pop();

      switch (i) {
        case "+":
          arr.push(lt + rt);
          break;
        case "-":
          arr.push(lt - rt);
          break;
        case "*":
          arr.push(lt * rt);
          break;
        case "/":
          arr.push(lt / rt);
          break;
        default:
          break;
      }
    }
  }
  return arr[0];
}

let str = "352+*9-";
console.log(solution(str));
