// forExe3.js
// 점수를 입력 * 5번 
// 점수의 합(sum), 평균(average)
// 큰값(max)

// 최종 출력 : 합계는 ? 이고, 평균은 ? 이고 최고점수는 ? 입니다. 

let sum = 0;
let average = 0;
let max = 0;
let min = 100; 
for (let i = 1; i <= 5; i++) {
  let plus = prompt('점수를 입력하세요.');
  sum = sum + (plus); // parseInt : 문자를 정수로 바꿔줌 
  if (max < plus) {
    max = plus;
   
  } if (min > plus) {
    min = plus;
    }
}
  average = sum / 5;

document.write(`합계는 ${sum}, 평균은 ${average}, 최고점수는 ${max}, 최소점수는 ${min} 입니다.`);
// } document.write(sum, average, max);