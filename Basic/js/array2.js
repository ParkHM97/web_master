//array2.js

let numAry = [23, 31, 56, 34, 77, 50];
numAry.forEach(function(num, idx){
  console.log(idx, ' => ', num);
})

//조건을 만족하는 새로운 배열
let newAry = numAry.filter(function(num){
  if(num > 50) {
    return true; 
  }
  return false;
});
console.log(newAry);

let fruits = ['peach', 'strawberry', 'lemon', 'grape']
let efruits = fruits.filter(function(elem){
  if(elem.indexOf('a') != -1) { // a가 들어가 있다 / -1은 없다 / != 반대의 의미  
    return true;
  }
  return false;
});
console.log(efruits);