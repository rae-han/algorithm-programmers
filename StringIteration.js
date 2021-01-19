let solution = (n) => {
  let word = "수박";

  return `${"수박".repeat(n/2)}${n%2===0 ? '' : '수'}`
}

let testCaseList = [
  1, 2, 4, 8, 9
]

for (const testCase of testCaseList) {
  let result = solution(testCase);
  console.log(result)
}