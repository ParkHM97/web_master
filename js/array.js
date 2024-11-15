// array.js

let numAry = []; // 배열이라는 객체를 만드는 방식
// let numAry = new Array(); 와 []; 는 동일함 (배열객체 생성)
numAry[0] = 10; // 0번째 위치에 값을 넣는다는 뜻
numAry.push(20); // 배열 맨 마지막에 20을 새로 넣음 
numAry.push(25);  
numAry.push(35);  

// 배열의 가장 첫번째 값 제거 : shift (교재 p.594)
// 쓰는 법
// numAry.shift();
console.log(`제거된 값은`, numAry.shift());
console.log(`제거된 값은`, numAry.pop());
numAry.unshift(99); // 배열에 새로운 값 

// let num1 = 10; //넘버 타입 

console.log(numAry.length); //속성 값, 위에서 2개 추가했으니 numAry.length = 2개 
for(let number of numAry) { // for of를 쓰면 numAry 배열의 개수만큼 반복함 (배열만 가능하다) number은 반복변수
  console.log(number);
}

console.log(numAry.length); //속성 값, 위에서 2개 추가했으니 numAry.length = 2개 
for(let number in numAry) { // for of를 쓰면 numAry 배열의 개수만큼 반복함 (배열만 가능하다) number은 반복변수
  console.log(number); // in을 쓰면 인덱스 값이 나옴, 값이 필요할 때는 of 사용
}

let obj = { // 객체 
  name: "Hong",
  age: 20,
  weight: 66.7
}

for (let prop in obj) {
  console.log(prop);
}

// object인 경우에는 for ... in 반복문 (객체)
// 배열인 경우에는 for ... of (배열, 안의 요소를 가져온다.)

// for (let prop of obj) { // 반복변수가 아니라서 ... 
//   console.log(prop);
// }

// 배열일 경우에 method 

numAry.forEach(function(param1, param2, param3){ // param1 : 배열요소 / param2 : 배열 인덱스 / param3 : 배열 자신
  console.log(param1, param2, param3);

}); // forEach는 매개값(함수)이 필요함, 배열에 있는 개수만큼 함수를 실행함, 함수에 매개값이 3개 필요하다...

// 배열의 합계
let sum = 0;
// numAry.forEach(elem, index, ary) {
// sum += elem;} // 중괄호와 => 함수 및 생략 가능한 걸 생략한 식 numAry.forEach(elem => sum += elem);

numAry.forEach(elem => sum += elem);
console.log(`배열의 합계는 ${sum} 입니다`);