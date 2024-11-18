// operator.js


// let num1 = 0, num2 = 0, result = 0;
// 아이디 태그 없을 때 : 'button:nth-of-type(1)' 
let addFunc = (e) => {
  console.log(e.target.innerHTML);

  let v1 = document.getElementById('num1').value;
  let v2 = document.querySelector('#num2').value;
  let result; // 변수 선언 (전역변수)
  if (!v1 || !v2) {
    alert('값을 입력하세요');
    return
  }

  if(e.target.innerHTML == '더하기'){
  result = parseInt(v1) + parseInt(v2);
} else if(e.target.innerHTML == '빼기') {
  result = parseInt(v1) - parseInt(v2);
} else if(e.target.innerHTML == '곱하기') {
  result = parseInt(v1) * parseInt(v2);
} else {
  result = parseInt(v1) / parseInt(v2);
} // 아래값 요약

  document.querySelector('#result').value = result;
}
document.querySelector('#add').addEventListener('click', addFunc); // 이벤트가 실행되면 실행할 함수 (여기서는 addFunc) = 이벤트 핸들러라고 함 
document.querySelector('#sub').addEventListener('click', addFunc);
document.querySelector('#multy').addEventListener('click', addFunc);
document.querySelector('#divid').addEventListener('click', addFunc); 


// let subFunc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) - parseInt(v2);

//   document.querySelector('#result').value = result;
// }
// document.querySelector('#sub').addEventListener('click', subFunc);

// let multyFc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) * parseInt(v2);

//   document.querySelector('#result').value = result;
// }

// document.querySelector('#multy').addEventListener('click', multyFc);

// let dividFc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) / parseInt(v2);

//   document.querySelector('#result').value = result;
// }
// document.querySelector('#divid').addEventListener('click', dividFc);