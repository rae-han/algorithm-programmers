let solution = (n) => {
  return `${"수박".repeat(n/2)}${n%2===0 ? '' : '수'}`
  // 수박이라는 문자열 2글자를 반복하는데 입력된 숫자가 2씩 카운트 돼야하므로 repeat내장 함수를 이용하여 반복한다.
  // repeat는 들어오는 인자값이 실수 값이라도 정수부만 유효하게 동작한다.
  // 그 후 입력된 숫자가 홀수인지 짝수인지 확인 후 마지막에 '수'를 붙일 것인지 안붙일 것인지 판단한다.
}

let testCaseList = [
  1, 2, 4, 8, 9
]

for (const testCase of testCaseList) {
  let result = solution(testCase);
  console.log(result)
}