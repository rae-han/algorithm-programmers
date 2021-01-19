let solution = (s) => {
  return s.length === 4 || s.length === 6 ? !s.split("").find(char => isNaN(char)) : false;
}

let testCaseList = [
  { case: "a123", result: false },
  { case: "ab1234", result: false },
  { case: "12345", result: false },
  { case: "1", result: false },
  { case: "012345", result: true },
  { case: "1234", result: true },
]

for (const testCase of testCaseList) {
  let result = solution(testCase.case);
  console.log(result === testCase.result)
}