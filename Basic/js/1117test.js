// 11월 15일 
// Array html
// array.js
// arrayExe1.js
// array2.js
// arrayExe2.js
// arrayExe3.js

// [1번] 자리배치 -> 몇줄을 만들어야 될까?
// 입장객 수 = 10명
// 한 줄에 3명씩 앉음
// 자리는 몇줄?
// 입장객수 / 한줄 사람수 => 정수(소숫점 이하 없음)

let line = 0;
let seat = 3;
let person = 10;

line = parseInt(person/seat); 
console.log(line);

// [2번] 구구단 출력. 
// 2 * 1 = 2   3 * 1 = 3   4 * 1 = 4   5 * 1 = 5
// 2 * 2 = 4   3 * 2 = 6   4 * 2 = 8   5 * 2 = 10
// 2 * 3 = 6   3 * 3 = 9   4 * 3 = 12  5 * 3 = 15
// 
// 2 * 9 = 18  3 * 9 = 27  4 * 9 = 36  5 * 9 = 45

for(let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    document.write(`${i} X ${j} = ${i * j} <br>`);
  } 
} 


// [3번] [20, 17, 45, 11, 82] 의 배열을 오름차순으로 정렬.



// 문제 1 : 변수num1과 str1을 선언한 후 num1에는 100의 값을 str1에는 문자값을 100을 저장한 후 
// 두 변수의 값을 +연산자를 통하여 연산하고 그 결과값을 콘솔에 출력하도록 코드를 작성하세요

let num1 = 100; 
let str = '100';
console.log(num1 + str); // 결과 : 100100 

// 문제 2 : 변수 num에 17을 대입한 후 num값을 3으로 나눈 값을 numb1에 
// num값을 3으로 나눈 나머지를 numb2에 저장하는 코드를 작성하세요.

let num = 17; 
let numb1 = num/3;
let numb2 = num%3; 

console.log(`numb1 = ${numb1}, numb2 = ${numb2}`);

// 문제 3 : 1부터 100까지의 숫자의 합을 구하는 코드를 작성하세요.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
} console.log(sum);

// 문제 4 51에서 100사이의 임의의 수를 생성하는 작업을 5번 실행하도록 코드를 작성하세요

// for (let i = 1; i < 6; i++) {
//   let random = parseInt(Math.random() * 50 + 51);
//   console.log(random);
// } 


// 문제 5 : 문제4에서 작성한 코드를 참고하여 5개의 값을 배열에 저장한 후 가장 큰 값과
// 가장 작은 값을 구하는 코드를 작성하세요.
let max = 51;
let min = 100; 
for (let i = 1; i < 6; i++) {
  let random = parseInt(Math.random() * 50 + 51);
  let list = random;
  console.log(random);
 if (max < list) {
  max = list
 } 
 if (min > list ){
  min = list
 } 
} console.log(`최대값은 ${max}, 최소값은 ${min} 입니다.`)


// 문제 6 : 배열friends = ['홍김동','김민수','박창석','고민형','김형식']을 선언한 후 
// '김'씨 성을 가진 친구만 kimsAry에 저장하도록 코드를 작성하세요.
let kimsAry = [];
let friends = ['홍김동', '김민수', '박창석', '고민형', '김형식'];
let result = friends.filter((item) => {
  return item[0] == "김";


});

console.log(result);