// event.js
console.dir(document);
document.onclick = function(){
//   alert('클릭했습니다.')
// document.location.href = 'https://www.naver.com';
 }

document.querySelector('#showBtn').addEventListener('click', function() {
  console.log('버튼 클릭!');
  document.querySelector('#desc').style.display = "block";
}); // addeventlistener ('이벤트 유형 click 등', 함수)
document.querySelector('#hideBtn').onclick = function() { // 위와 같은 의미임 
  document.querySelector('#desc').style.display = "none";
};

// 이미지에 이벤트 구현 
document.querySelector('img').addEventListener('mouseover', function() {
  document.querySelector('#desc').style.display = "block";
});

document.querySelector('img').addEventListener('mouseout', function() {
  document.querySelector('#desc').style.display = "none";
});

// 이미지 변경 이벤트 

let imgAry = ["앵무.jpg", "고양이.jpg", "강아지.jpg", "레드향.jpg"]
let idx = 0;
document.querySelector('#changeImg').addEventListener('click', function() { // querySelcetor (). 이 뒤에 붙는 값은 html에 존재해야 함
  if(idx > 3) {
    idx = 0;
  }
  let imageName = imgAry[idx++];
  document.querySelector('img').src = 'image/' + imageName;
});
