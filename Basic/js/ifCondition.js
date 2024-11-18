//ifCondition.js (if 조건문)
//boolean => true, false

let isOk = true;
console.log(isOk); //문자열이 아니라 true 값 

if (isOk == "true") { // 위의 true;(불리언 연산자) 값과 == true(문자) 값은 다르다. 
  // if 블럭
  alert('참입니다.');
}

// if (isOk != "true") {
//   // if 블럭
//   alert('참입니다.');
// }

let result = isOk != "true"; // typeof result => boolean 이 나온다.

result = 34 < 20; // false 
let age = 15;

// if (result) {
//   alert('참입니다.');

// } else {
//   alert('거짓입니다.');
// }

if(age >= 20) {
  alert('성인입니다.');
} else { // else 뒤에 () 없음 
  alert('미성년입니다.');
}