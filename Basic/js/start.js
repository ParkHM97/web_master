// start.js 
// Document Object Model => DOM, object(객체, 눈에 보이는 모든 것) 속성, 기능
//                               사람 : 키, 몸무게, 시력(숫자로 나타낼 수 있는 값 = 속성) => 필드
//                                     먹는다, 뛴다, 잔다(기능) => 함수로 구현 
// 대소문자 구분!! 

let show = document.querySelector('#show') /*화면에 있는 div 요소 지정 */
show.innerHTML = '<b>Hello, World</b><button onclick = "deleteFunc()">삭제</button>'; /*속성 , 괄호가 있으면 함수 (메소드)*/

show.addEventListener('mouseover', function(e) {
  e.target.style.backgroundColor = 'red'; 
});
console.log(show); /*변수의 값을 보여줌*/

function deleteFunc() {
 alert('삭제버튼을 클릭했습니다.'); /*alert : 알림창*/
}

// console.log()
// document.write()
document.write('<ul><li>Apple</li><li>Banana</li></ul>');