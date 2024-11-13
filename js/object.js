// object.js
// 객체 
let ary = [];
let obj = {
  name: '홍길동', 
  age: 20, 
  height: 169.4 
}; 
console.log(`이름은 ${obj.name}, 나이는 ${obj['age']}`);
obj.age = 21; // 값이 바뀌어서 아래는 21로 출력 
console.log(`이름은 ${obj.name}, 나이는 ${obj['age']}`);
// object 타입에서 속성을 반환해 주는 반복문 (for ... in 반복문)
for (let prop in obj) { // prop = 변수로 선언함 
  console.log(`prop => ${prop}, 값은 ${obj[prop]}`);
}

// 홍길동, 김민식, 최홍식 
ary.push(obj); // push : 추가하는 메소드  
ary.push({name: '김민식', age: 25, height: 190}); // 김민식의 정보를 배열 추가 
ary.push({name: '최홍식', age: 28, height: 160});
let searchName = '홍길동';
// 홍길동의 나이
// 평균키 => 모든 사람의 평균키 
// for (let i = 0; i < ary.length; i++) {
//   if (ary[i]['name'] >= searchName) {
// console.log(`이름은 ${ary[i]['name']}, 나이는 ${ary[i].age}, 키는 ${ary[i]['height']}`)
// // console.log(ary[1]['height']);
// }
// }

let sum = 0;
let i = 0
for (; i < ary.length; i++) {
  if (ary[i]['height'])
    sum += ary[i]['height'];
} 

console.log(Math.round(sum/ary.length*100)/100);
console.log(Math.round(12.555*100)/100);