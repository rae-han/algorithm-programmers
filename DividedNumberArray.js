let testCaseList = [
  { arr: [5, 9, 7, 10], divisor: 5, result: [5, 10] },
  { arr: [2, 36, 1, 3], divisor: 1, result: [1, 2, 3, 36] },
  { arr: [3,2,6], divisor: 10, result: [-1] },
]

const solution = (arr, divisor) => {
  let result = arr.filter(value => value%divisor === 0).sort((larger, smaller) => larger-smaller);
  return result.length !== 0 ? result : [-1]
}

for (const testCase of testCaseList) {
  console.log(solution(testCase.arr, testCase.divisor))
  console.log(testCase.result)
}

