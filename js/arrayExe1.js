// arrayExe1.js

let numAry = [34]; 

// 순서 24, 44, 34, 83, 22

numAry.unshift(44);
numAry.unshift(24);
numAry.push(83);
numAry.push(22);
console.log(numAry);


numAry.shift();
numAry.unshift(77)
console.log(numAry);

numAry.splice(1, 1, 55); // 인덱스 1번째 값을 1개만 55로 변경 / 인덱스, 몇 개의 요소를 바꿀 것인지, 바꿀 값
// 바꿀 값을 넣지 않으면 삭제됨 (1, 1) < 인덱스 1번의 값을 1개만큼 삭제 (바꿀 값이 없기 때문에) 
// 요소 개수를 적지 않으면 기존 값이 삭제되지 않고 추가됨 (1, 0, 33)
console.log(numAry);

// 문제~ 

let dayAry = []; // 요일을 담는 배열 

// 수요일 화요일 토요일 금요일 월요일 일요일 목요일 



// dayAry.splice(0, 0, '수요일');
// dayAry.splice(0, 0, '화요일');
// dayAry.splice(0, 0, '토요일');
// dayAry.splice(0, 0, '금요일');
// dayAry.splice(0, 0, '월요일');
// dayAry.splice(0, 0, '일요일');
// dayAry.splice(0, 0, '목요일');
// console.log(dayAry);

dayAry.splice(0, 0, '수요일');
dayAry.splice(0, 0, '화요일');
dayAry.splice(2, 0, '토요일');
dayAry.splice(2, 0, '금요일');
dayAry.splice(0, 0, '월요일');
dayAry.splice(0, 0, '일요일');
dayAry.splice(4, 0, '목요일');

console.log(dayAry);

console.log(dayAry.indexOf('화요일')); // 인덱스 값 반환