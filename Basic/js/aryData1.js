// aryData1.js

document.querySelector('#inputValue').remove(); // 화면에 보이는 요소 (element) 삭제
document.querySelector('#addBtn').remove(); // 화면에 보이는 요소 (element) 삭제
document.querySelector('span').remove(); // 화면에 보이는 요소 (element) 삭제

let numAry = [23, 45, 34, 78, 51, 98]; 
let sum = 0;
for (let i=0; i < numAry.length; i++) {
  console.log(`${i} 위치 => ${numAry[i]}`);
  // if (numAry[i] > 50) {
  // sum += numAry[i] ; // // sum = sum + parseInt(numAry[i]);
  // console.log(`누적 값은 ${sum} 입니다.`)
  if (numAry[i] % 2 == 0) {// 짝수만 누적 
    sum += numAry[i] ; }
  } console.log(`누적 값은 ${sum} 입니다.`);


// sum = sum + 1;
// sum += 1;