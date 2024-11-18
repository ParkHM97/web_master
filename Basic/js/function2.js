// function2.js
// let sum = 0;

// 함수 선언식
// function sum(param1, param2){
//   return param1 + param2;
// }
// 변수 이름과 똑같은 이름을 함수에 사용하면 안 됨 (let은 두 번 선언 불가)
// 함수 표현식
// 0, undefined, '', null 등은 false 
//  if(param1 || param2) { // false
// 디폴트 값을 지정해 주는 게 더 나은 코딩

let sum = function(param1, param2) {
  if(!param1 || !param2) { // !가 추가되면 반대의 의미 > true가 됨 
    return 0;
  }
  return param1 + param2;
}
console.log(sum());

// NaN + 100 = NaN
let sum2 = function(param1 = 0, param2 = 0) { // 값이 들어오지 않으면 대신 사용할 초기값 / 아래 return 0과 의미 동일
  // if(!param1 || !param2) { // !가 추가되면 반대의 의미 > true가 됨 
  //   return 0;
  // }
  return param1 + param2;
}
console.log(sum2(3, 6));

// function 을 줄이는 화살표 함수 

// let getMaxFunc = function (num1 = 0, num2 = 0) {
//   if(num1 >= num2) {
//     return num1; // return은 함수의 끝을 의미한다.
//   } else {
//     return num2;
//   }
// }

// let getMaxFunc = (num1 = 0, num2 = 0) => { // => 을 사용하면 {} 를 사용하겠다 라는 의미 (함수와 동일)
//   if(num1 >= num2) {
//     return num1; // return은 함수의 끝을 의미한다.
//   } else {
//     return num2;
//   }
// }

let getMaxFunc = (num1 = 0, num2 = 0) => num1 >= num2 ? num1 : num2;
console.log(getMaxFunc(99, 7));
  { // => 을 사용하면 {} 를 사용하겠다 라는 의미 (함수와 동일)
  
  // if(num1 >= num2) {
  //   return num1; // return은 함수의 끝을 의미한다.
  // } else {
  //   return num2; 
  // }         
  
  
  
  // ? 는 if의 의미 
//   num1 >= num2 ? num1 : num2; // 참이면 ? 뒤의 num1을, 거짓이면 : 뒤의 num2 실행 (줄 1개일 때 사용)
//   return result;
 }
