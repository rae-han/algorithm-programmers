let solution = (s) => {
  console.log(s.split("").map(char => isNaN(char)));
  return s.length === 4 || s.length === 6 ? !s.split("").find(char => isNaN(char)) : false;
  // 길이가 4, 6인지 우선 확인
  // split 함수를 통해서 문자열을 하나씩 쪼개서 배열로 만든다.
  // 그 후 배열 요소를 isNaN을 통해 숫자가 아닌게 있는지 확인을 하고 있다면 false를 반환한다.
  // 문자열 자체로 확인하지 않고 쪼개서 한 이유는 자바스크립트는 숫자형이 따로 없고 부동소수점을 사용하기 때문에 e가 들어간 지수도 숫자로 인식하기 때문이다.
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
  console.log(`result ${result}`)
  console.log(result === testCase.result)
}

