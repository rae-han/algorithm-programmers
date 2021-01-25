let testCaseList = [
  { input: 45, result: 7 },
  { input: 125, result: 229 },
]

const solution = (n) => {
  const baseN = 3; 
  // 3진법
  // console.log(n.toString(baseN).split('').reduce((acc, cur, idx) => {
  //   console.log(acc, cur, idx)
  //   console.log(Math.pow(baseN, idx))
  //   return cur*Math.pow(baseN, idx)+acc;
  // }))

  return parseInt([...n.toString(baseN)].reverse().join(''), baseN);
  // 들어오는 숫자를 3진법으로 바꿔 준 후 배열로 만들어 준 다음에 뒤집고 다시 합쳐준 다음 10진법으로 바꿔준다.
}

for (const testCase of testCaseList) {
  console.log(testCase.result == solution(testCase.input))
}
