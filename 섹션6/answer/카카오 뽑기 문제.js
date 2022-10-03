function solution(board, moves) {
  let answer = [];
  let count = 0;

  for (let i of moves) {
    for (let row = 0; row < board.length; row++) {
      if (board[row][i - 1] !== 0) {
        let tmp = board[row][i - 1];
        board[row][i - 1] = 0;
        if (tmp === answer[answer.length - 1]) {
          answer.pop();
          count += 2;
        } else {
          answer.push(tmp);
        }
        break;
      }
    }
  }
  return count;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
