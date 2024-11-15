// arrayExe2.js
let dupAry = ['홍길동', '김민혁', '장동숙', '홍길동', '홍길도', '김민'];

// let newAry = [];
// let tempAry = [];
// newAry = dupAry.filter(function (elem, idx, ary) {
//   if (tempAry.indexOf(elem) == -1) {
//     tempAry.push(elem);
//     return true;
//   }
//   return false;
// })

// console.log(newAry);


let newAry = [];
let tempAry = [];
newAry = dupAry.filter(function (elem, idx, ary) {
  if (ary.indexOf(elem) == idx) {
    tempAry.push(elem);
    return true;
  }
  return false;
})

console.log(newAry);