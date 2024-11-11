// exe3.js
// 문제 3가지 

//1. 태어난 년도 입력 -> 나이 계산 (2024년 = 0살)
//2. 직사각형 너비 계산 -> 가로 길이, 세로 길이 입력 (*)
//3. 최고값, 최소값 (비교문) -> 입력숫자는 3개 / 제일 큰 값과 제일 작은 값을 알아내고 출력하는 프로그램 

// let question = 3;

// if (question == 1) {
//  // 1번 문제 
//  let birth = prompt("태어난 년도를 입력하세요.");
//  document.write("나이는 " + [2024 - birth] + " 살 입니다.");
// } else if (question == 2) {
//   // 2번 문제 
//   let sweight = prompt("가로 길이를 입력하세요.");
//   let sheight = prompt("세로 길이를 입력하세요.");
//   document.write("너비는 " + sweight * sheight + "입니다." );
// } else {
//  // 3번 문제


  let number1 = prompt("첫번째 값을 입력하세요.");
  let number2 = prompt("두번째 값을 입력하세요.");
  let number3 = prompt("세번째 값을 입력하세요.");

  
if (number1 > number2 > number3) {
  document.write("최대값은 " + number1 + ", 최소값은 " + number3+ "입니다.");
} else if (number1 > number3 > number2) {
  document.write("최대값은 " + number1 + ", 최소값은 " + number2+ "입니다.");
} else if (number2 > number1 > number3) {
  document.write("최대값은 " + number2 + ", 최소값은 " + number3+ "입니다.");
} else if (number2 > number1 > number3) {
  document.write("최대값은 " + number2 + ", 최소값은 " + number3+ "입니다.");
} else if (number3 > number1 > number2) {
  document.write("최대값은 " + number3 + ", 최소값은 " + number2+ "입니다.");
} else {
  document.write("최대값은 " + number3 + ", 최소값은 " + number1+ "입니다.");
} 
