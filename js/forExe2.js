// forExe2.js
// 1 ~ 10 까지 / 2의 배수(sum2)와 3의 배수(sum3)를 골라내서 변수 저장
// for 반복문 / if 조건문 
// 2의 배수의 합은 ~ 입니다.
// 3의 배수의 합은 ~ 입니다. 추출 (콘솔)

let sum2 = 0;
let sum3 = 0;
let i = 0;
for (; i < 11; i++) {
  if (i % 2 == 0) {
    sum2 = sum2 + i;
  }
  if (i % 3 == 0) {
    sum3 = sum3 + i;
  }
}

console.log('2의 배수의 합은 ' + sum2 + ', 3의 배수의 합은 ' + sum3 + '입니다.')
console.log(`2의 배수의 합은 ${sum2}, 3의 배수의 합은 ${sum3} 입니다.`)