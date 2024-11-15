// // arrayExe3.js
// let friendAry = [{
//     name: "홍길동",
//     age: 20,
//     weight: 56.7
//   }, // 배열에 들어 있는 게 객체 타입
//   {
//     name: "김민기",
//     age: 21,
//     weight: 93.7
//   },
//   {
//     name: "박철순",
//     age: 22,
//     weight: 79.7
//   },
//   {
//     name: "이만수",
//     age: 23,
//     weight: 88.7
//   }
// ]


// // friendAry.forEach((friend) => { // friend는 각 객체를 가리킨다
// //   console.log(friend.name); // 이름만 따로 볼 수 있다.
// // });

// // friendAry.forEach((friend) => { // friend는 각 객체를 가리킨다
// //   console.log(friend['age']); // 나이만 따로 볼 수 있다.
// // });

// // foreach는 반환해 주는 값이 없다.
// // 그래서 temp도 현재 반환이 안 되는 거임...
// // filter는 반환 가능 


// let temp = friendAry.forEach((friend) => { // friend는 각 객체를 가리킨다
//   if (friend.weight > 60) {
//     console.log(friend);
//     return true;
//   }
//   return false;
// });
// console.log(temp)



/*
empAry => 사원 중에서 성별: 여자, 급여: 5000 이상
=> femaleAry 저장
*/

// console.log(json.gender);

// 1요약
// let femaleAry = empAry.filter(function (emp) {
//   return emp.gender == 'Female' && emp.salary >= 5000;
// })
// 2!!!

// let femaleAry = empAry.filter(function(elem) {
//       if (elem.gender == "Female" && elem.salary >= 5000) {
//         return true;
//     } return false;
//   } 
// )
// 3요약 
// let femaleAry = empAry.filter( (emp) => 
//   emp.gender == 'Female' && emp.salary >= 5000);


// console.log(femaleAry);





// friendAry.forEach((friend) => { // friend는 각 객체를 가리킨다
// console.log(friend['age'])
// })

// 쪽지 시험칠 때 사용

let max = 51;
let min = 100;
let numAry = [];
let i = 0;
for(; i < 5; i++){
  let num = parseInt(Math.random() * 50 + 51)
    numAry[i] = num
    if (max < numAry[i]) {
      max = numAry[i]; 
    } if (min > numAry[i]) {
      min = numAry[i]; 
    }
  }  console.log(numAry);
  console.log(max); 
  console.log(min);


