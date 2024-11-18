// function.js
// 기능을 구현하기 위한 실행 명령의 조합 

// 두 수 입력 => 첫번째 값에 +5, 두 번째 값 + 3 => 두 수를 곱한 결과값 
calculateFunc(10, 20, document.querySelector('.result')); // 함수호출 할 때 실제 값 입력, 10과 20을 매개값이라고 한다. 
// document.write(`<p><b>${result}</b></p>`);
calculateFunc(5, 7, document.querySelector('.value'));
// document.write(`<p><b>${result}</b></p>`);
// calculateFunc(11, 90);
function calculateFunc(param1, param2, param3) { // 매개변수 param1, param2
  let num1 = param1, num2 = param2;
 
  num1 = num1 + 5;
  num2 = num2 + 3;
  param3.innerHTML = '<b>' + num1 * num2 + '</b>';
  // console.log(num1 * num2);
  // return num1 * num2; // 결과값을 calculateFunc에 리턴하겠습니다.
}

function sum(mun1, num2) {
  let result = num1 + num2;
  return result; 
}
// return이 뭔가요? 
// 10 + 20 => ?
// 5 + 7 => ? 
console.log(sum(sum(10, 20), sum(5, 7))); // 30과 12, 그걸 다시 더함 // return 명령문은 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환한다. (function에만!!!!!)
