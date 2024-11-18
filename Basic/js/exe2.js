// exe2.js
// if와 else 를 사용 

let number1 = 30;

// 사용자가 값을 입력할 수 있도록 "숫자를 입력하세요. (범위 : 0~100)"
// 변수 선언 후 저장 
// 입력값 35는 30보다 큽니다. 
// 25는 30보다 작습니다. 

// let input = prompt("숫자를 입력하세요. 범위 : 0~100")
// if (input > 30) {
//   console.log(input + "은 " + number1 + "보다 큽니다."); 
// } else {
//   console.log(input + "은 " + number1 + "보다 작습니다.");
// }
// 0 ~ 100 사이의 값을 입력하세요. 

let input = prompt("숫자를 입력하세요 - 범위 : 0~100");

if (input > 100 || input < 0) {  //  || 또는 
  alert("0부터 100 사이의 값을 입력하세요."); // if 문 순서 신경 쓰기 / 위에서부터 실행됨 
} else if (input > number1) {
  alert(input + "은 " + number1 + "보다 큽니다."); 
} else if (input == number1) {
    alert(input + "은 " + number1 + "과 같습니다.");
} else {
  alert(input + "은 " + number1 + "보다 작습니다.");
} 
