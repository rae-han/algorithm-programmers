let testCaseList = [1,2,3,4,5,6,7,8,9,10];
let resultList = [1,2,4,11,12,14,21,22,24,41];

function solution(n) {
  let answer = '';

  while (n) {
    answer = ['4', '1', '2'][n%3] + answer
    let quotient = Math.floor(n/3)    
    n = n%3 === 0 ? quotient - 1 : quotient;
  }

  return answer  
}

for (const testCase of testCaseList) {
  let res = solution(testCase);
  console.log(res)
}