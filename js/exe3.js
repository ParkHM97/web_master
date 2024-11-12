// exe3.js
// 문제 3가지 

//1. 태어난 년도 입력 -> 나이 계산 (2024년 = 0살)
//2. 직사각형 너비 계산 -> 가로 길이, 세로 길이 입력 (*)
//3. 최고값, 최소값 (비교문) -> 입력숫자는 3개 / 제일 큰 값과 제일 작은 값을 알아내고 출력하는 프로그램 

// let question = 3; // 전역 (모든 곳에서 사용 가능한, global variable) 변수 

// if (question == 1) { // if{} = if 블럭, if 블럭 안에 정의된 변수는 if 블럭 안에서만 유효하다. if 블럭 밖에서는 정의될 수 없음 (에러 발생)  
//  // 1번 문제 
//  let years = 2024;
//  let birth = prompt("태어난 년도를 입력하세요.");
//  document.write("나이는 " + [years - birth] + " 살 입니다.");



// } else if (question == 2) {
//   // 2번 문제 
//   let sweight = prompt("가로 길이를 입력하세요.");
//   let sheight = prompt("세로 길이를 입력하세요.");
//   let result = sweight * sheight;
//   document.write("너비는 " + result + "입니다." );


// } else {
//  // 3번 문제


//   let num1 = prompt("첫번째 값을 입력하세요.");
//   let num2 = prompt("두번째 값을 입력하세요.");
//   let num3 = prompt("세번째 값을 입력하세요.");
//   if (num1 == num2 || num2 == num3 || num1 == num3) { // 수가 같을 경우, 같은 값이 없을 때만 아래의 if문을 처리하겠다.
//     document.write("동일한 값이 존재합니다. 다시 입력해 주세요.");
//   } else { 
//     let max, min = 0;
//     if (num1 > num2) { 
//       if (num1 > num3) {
//         max = num1;
//         if (num2 > num3) {
//           min = num3; 
//         } else {
//           min = num2;
//         } 
//       } else {
//         max = num3; 
//         min = num2;
//       } document.write("최대값은 " + max + ", " + "최소값은 " + min + "입니다.")
  
//     } else { // num2 > num1 
//         if (num2 > num1) {
//           if (num2 > num3) {
//             max = num2;
//             if (num3 > num1) {
//               min = num1; 
//             } else {
//               min = num3;
//             }
//         } else {
//           max = num3;
//           min = num1; 
//         } document.write("최대값은 " + max + ", " + "최소값은 " + min + "입니다.")
//       }
//     }

//   } // end of if (number1 == number2 || number2 == number3 || number1 == number3) 

 let n1 = prompt("1번 입력")
 let n2 = prompt("2번 입력")
 let n3 = prompt("3번 입력")


 if (n1 == n2 || n2 == n3 || n1 == n3) { // 수가 같을 경우, 같은 값이 없을 때만 아래의 if문을 처리하겠다.
   document.write("동일한 값이 존재합니다. 다시 입력해 주세요.");
   let max1 = 0;
 } else {
   if (n1 > n2) {
     if (n1 > n3) {
       max1 = n1;
      } else {
      max = n3;
    }
   } else {
     if (n2 > n3) {
       max1 = n2;
     } else {
       max1 = n3;
     } 
   }
 document.write("최대값은 " + max1 + " 입니다.");
  }
 

  // end of if (number1 == number2 || number2 == number3 || number1 == number3)





// if (number1 > number2 > number3) { 내가 한 거...
//   document.write("최대값은 " + number1 + ", 최소값은 " + number3+ "입니다.");
// } else if (number1 > number3 > number2) {
//   document.write("최대값은 " + number1 + ", 최소값은 " + number2+ "입니다.");
// } else if (number2 > number1 > number3) {
//   document.write("최대값은 " + number2 + ", 최소값은 " + number3+ "입니다.");
// } else if (number2 > number1 > number3) {
//   document.write("최대값은 " + number2 + ", 최소값은 " + number3+ "입니다.");
// } else if (number3 > number1 > number2) {
//   document.write("최대값은 " + number3 + ", 최소값은 " + number2+ "입니다.");
// } else {
//   document.write("최대값은 " + number3 + ", 최소값은 " + number1+ "입니다.");
// } 

