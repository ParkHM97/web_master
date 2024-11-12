// exe4.js
// 2024년 11월 12일 과제 
// 5명의 친구, 성적을 입력 받음 (prompt) 
// 성적을 모두 합산한 후 평균, 최고 점수, 최저 점수를 구해서 
// 우리반 평균은 ? , 최고점은 ? , 최저점은 ? 이다 (변수 5개 선언 or 배열 선언)
// push (데이터 값을 추가함)

let oclass = [80, 78, 90, 50, 68, 98, 93, 40];
let avarage = 0;
let max = 0;
let min = 200;
let sum = 0;
for (i = 0; i < oclass.length; i++) {
  sum += oclass[i];
  if (max < oclass[i]) {
    max = oclass[i];
  } if (min > oclass[i]) {
    min = oclass[i];
  }
   
  avarage = sum/oclass.length
} document.write(`우리반 평균은 ${avarage}, 최고점은 ${max}, 최저점은 ${min} 입니다.`)

