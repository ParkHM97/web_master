// function1.js

let numAry1 = [50, 60, 40, 70, 20]
let numAry2 = [55, 63, 42, 79, 27]

console.log(sum(numAry1, numAry2));
console.log(`sumAry(numAry1)의 합계 => ${sumAry(numAry1)}`);
console.log(`sumAry(numAry2)의 합계 => ${sumAry(numAry2)}`);
console.log(sum(sumAry([10, 20, 30]), sumAry([10, 20]))); 
// 60 ,                      30 => 90

// // 매개값을 배열로 받아서 배열요소의 합 
function sumAry(param1) {
  let result = 0;
  for (let i = 0; i < param1.length; i++) {
   result += param1[i];
  }
  return result;
}

function sum(param1, param2) {
  let result = param1 + param2; 
  return result;
}
// <숙제>>
// 배열을 매개값으로 받아서 요소 중에서 제일 큰 값을 구하는 함수
// 함수 이름은 getMaxValue(배열)

// console.log(getMaxValue(numAry1)); => 70을 반환하는 기능 

// function getMaxValue() {

// }


function getMaxValue(param) {
  let Max = 0;
  for (let i = 0; i < param.length; i++) {
    if (max < param[i]) {
      Max = param[i];
    }
  }
  return max;
}


// Math.random() // 활용해서 11 ~ 20사이의 임의의 수 생성
// 배열 [5] 에 저장

function makeNumberFnc() {
  let randomAry = [];
  for (let i = 1; i <= 5; i++) {
    let temp = parseInt(Math.random() * 10) + 11;
    randomAry.push(temp);
  }
  console.log(randomAry); // 결과값 반환
  let sum = sumAry(randomAry); // randomAry : 배열 / sumAry : 합을 구하는 함수 (위에서 만듬)
  return sum;

}
let result = makeNumberFnc();

console.log(`임의의 배열의 합은 ${result} 입니다.`)