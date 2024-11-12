// aryData2.js

document.querySelector('#inputValue').remove(); // 화면에 보이는 요소 (element) 삭제
document.querySelector('#addBtn').remove(); // 화면에 보이는 요소 (element) 삭제
document.querySelector('span').remove(); // 화면에 보이는 요소 (element) 삭제

let numAry = [22, 45, 18, 41, 98, 55];

for(let i=0; i < numAry.length; i++) {
  if (i % 2 == 0) {
    console.log(numAry[i]); // index가 짝수번호인 값만 추출 
  }
}


for(let i=0; i < numAry.length; i++) {
  if (i % 2 == 0 || numAry[i] > 40) {
    console.log(numAry[i]); // index가 짝수번호이거나 40 이상인 값만 추출 
  }
}

let max = 0;

for(let i=0; i < numAry.length; i++) {
  // if (i % 2 == 0) {
  if (max < numAry[i]) {
    console.log(numAry[i]); 
    max = numAry; // 최대값 추출 
  }
}

// let n = prompt('아무 값이나 입력하세요.')
// let k = 0;
// for(let i=0; i < numAry.length; i++) {

//     console.log(numAry[i]); 
//     max = numAry; // 최대값 추출 
//     if(parseInt(n) < numAry[i]) {
//       k += numAry[i];
//     }
//   } 
//   console.log(k); // k의 값은? => 사용자가 입력한 값보다 큰 numary 값을 누적해서 k에 
