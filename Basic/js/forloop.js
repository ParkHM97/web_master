// forloop.js (for 반복문)
// 1 ~ 5까지의 누적합을 sum에 
let sum = 0;
sum = sum + 1; // 1 
sum = sum + 2; // 3
sum = sum + 3; // 6 
sum = sum + 4; // 10
sum = sum + 5; // 15

sum = 10 / 2; // 나누기 연산
sum = 10 % 2; // 나머지 연산 (10을 2로 나눴을 때 남는 나머지를 구하는 연산)



// i++) i = i + 1;
// i = i + 2; > i+=2
console.log('1 ~ 5까지의 합: ' + sum); // 이 상태의 sum에는 15가 들어가 있다.
sum = 0; // 0으로 초기화 
let i = 1;
// i는 1부터 시작, 5이하가 될 때까지 1씩 증가한다.
for (; i <= 10; i++) { // for (초기값 ; 조건(true가 들어가도 됨, 대신 추가 조건이 없으면 무한대로 연산하게 된다.) ; 증감 )
  console.log('sum => ' + sum + ', i => ' + i); // console이 sum의 위에 있냐 아래에 있냐 값이 달라진다.
  if (i % 2 == 1) // i % 2 == 1 (홀수 / 2로 나눴을 때 나머지 1)
  sum = sum + i; // i 값이 1 > sum + i를 실행하고 그 값을 sum에 넣어준다 / i <= 5 조건을 만족하는 값까지 반복함
  if (i == 10) {
    break; // i가 7에 도달하면 종료 
  }
}
console.log('1 ~ ' + i + '까지의 합: ' + sum);

// for (let i = 1; i <= 10; i++) 외우기 

