// function1.js

let numAry1 = [50, 60, 40, 70, 20]
let numAry2 = [55, 63, 42, 79, 27]

// console.log(sum(numAry1, numAry2));
console.log(`sumAry(numAry1)의 합계 => ${sumAry(numAry1)}`);
console.log(`sumAry(numAry2)의 합계 => ${sumAry(numAry2)}`);
console.log(sumAry([10, 20, 30]), sumAry([10, 20])); 
                    //60 ,                      30 => 90

// 매개값을 배열로 받아서 배열요소의 합 
function sumAry(param1) {
  let result = 0;
  for (let i = 0; i < param1.length; i++) {
    sum += param1[i];
  }
  return sum;
}

function sum(param1, param2) {
  let result = param1 + param2; 
  return result;
}
// <숙제>>
// 배열을 매개값으로 받아서 요소 중에서 제일 큰 값을 구하는 함수
// 함수 이름은 getMaxValue(배열)

// console.log(getMaxValue(numAry1)); => 70을 반환하는 기능 