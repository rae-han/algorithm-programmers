// 체육복
const testCaseList = [
  { n: 5, lost: [1, 2, 4], reserve: [1, 3, 5], result: 5 },
  { n: 5, lost: [2, 4], reserve: [1, 3, 5], result: 5 },
  { n: 5, lost: [2, 4], reserve: [3], result: 4 },
  { n: 3, lost: [3], reserve: [1], result: 2 }
]

const solution = (n, lost, reserve) => {
  console.log(n, lost, reserve)
  let [calcLost, calcReserve] = [lost, reserve].map((item, idx, arr) => item.filter(i => !arr[Math.abs(idx-1)].includes(i)))
  // 여벌이 있는 사람이 잃어버린 경우에는 체육복이 1벌 밖에 없기 때문에 제외시켜줘야 한다.
  // 하다보니 코드가 이렇게 됐는데 이 경우에는 lost, reserve 를 따로 분리해서 관리하는게 맞는거 같다. 
  console.log(calcLost, calcReserve)
  
  let result = calcLost.reduce((acc, cur, idx) => {
    if(calcReserve.includes(cur-1)) {
      calcReserve = calcReserve.filter(r => r !== cur-1)
      return [...acc]
    }
    if(calcReserve.includes(cur+1)) {
      calcReserve = calcReserve.filter(r => r !== cur+1)
      return [...acc]
    }
    return [...acc, cur]
  }, [])

  console.log(result)
  return n-result.length;
}

let result = testCaseList.map(({n, lost, reserve, result}) => solution(n, lost, reserve) === result)
console.log(result)


