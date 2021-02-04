function solution(new_id) {
  console.log(new_id)

  const answer = new_id
    .toLowerCase() // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    .replace(/[^\w-_.]/g, '') // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    .replace(/\.{2,}/g, '.') // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    .replace(/^\.|\.$/g, '') // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    .replace(/^$/, 'a') // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    .slice(0, 15) // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    .replace(/\.$/, ''); // 6단계 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.

        
    let answerLen = answer.length
    return answerLen > 2 ? answer : answer.padEnd(3, answer.charAt(answerLen-1)) // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
}

let testCaseList = [
  "...!@BaT#*..y.abcdefghijklm",
  "z-+.^.",
  "=.=",
  "123_.def",
  "abcdefghijklmn.p"
]

testCaseList.map(testCase => {
  console.log(solution(testCase))
})