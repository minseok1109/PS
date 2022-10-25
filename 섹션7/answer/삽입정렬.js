function solution(arr) {
  let answer = arr;
  for (let i = 1; i < answer.length; i++) {
    let start = answer[i];
    let j;
    for (j = i - 1; (j) => 0; j--) {
      if (answer[j] > start) answer[j + 1] = answer[j];
      else break;
    }
    answer[j + 1] = start;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

{
  /* <html>
    <head>
        <meta charset="UTF-8">
        <title>출력결과</title>
    </head>
    <body>
        <script>
            function solution(arr){
                let answer=[];
                answer.push(arr[0]);
                for(let i=1; i<arr.length; i++){
                    for(let j=0; j<answer.length; j++){
                        if(arr[i]<answer[j]){
                            answer.splice(j, 0, arr[i]);
                            break;
                        } 
                    }
                }
                return answer;
            }

            let arr=[11, 7, 5, 6, 10, 9];
            console.log(solution(arr));
        </script>
    </body>
</html> */
}
