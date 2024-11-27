
function makeRow(friendInfo = {
  name,
  phone,
  birth,
  blood
}) { // 오브젝트 타입 {} 속성과 변수명이 동일하면 생략 가능 (아래 name: fname은 달라서 써야 함)
  // 이름, 연락처, 생일을 받아와서 tr 생성한 후 tr을 반환하는 기능 생성
  let tr = document.createElement('tr');
  // 목록을 눌렀을 때 위에 값이 입력되게 
  tr.addEventListener('click', function (e) { // 이벤트핸들러 안의 this는 이벤트를 받는 대상
    console.log(this.children[1].innerHTML); // tr의 자식인 0번째 td를 가져온다 
    document.querySelector('input[name="friendName"]').value = this.children[1].innerHTML;
    console.log(this.children[2].innerHTML);
    document.querySelector('input[name="friendPhone"]').value = this.children[2].innerHTML;
    console.log(this.children[3].innerHTML);
    document.querySelector('input[name="friendBirth"]').value = this.children[3].innerHTML;
    console.log(this.children[4].innerHTML);
    document.querySelector('select[name="bloodType"]').value = this.children[4].innerHTML;
    // document.querySelector('Range[name="bloodType"]').value = this.children[4].innerHTML;
  })




  // <td><input type="checkbox"></td>
// 전체 선택~~ 
  let td = document.createElement('td');
  let btn = document.createElement('input');
  btn.setAttribute('type', 'checkbox');
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // 상위 이벤트의 요소를 차단하겠습니다.
   let chks = document.querySelectorAll('tbody input[type="checkbox"]'); // 총 체크박스 개수 (아래의)
   let chked = document.querySelectorAll('tbody input[type="checkbox"]:checked'); // 체크된 체크박스 개수 
   // 두 길이를 비교해서 같으면 전체선택을, 다르면 전체선택 표시 해제 
   console.log(chked);
   if (chks.length == chked.length){
    document.querySelector('thead input[type="checkbox"]').checked = true;
  } else {
    document.querySelector('thead input[type="checkbox"]').checked = false; 
  }
  })

  // 요약 chks.length == chked.length ? true : false;
  // 다른 표현식 .checked = chks.length == chked.length; (.checked 의 기본값 = true)

  btn.addEventListener('change', (e) => {
    document.querySelector('thead input[type="checkbox"]').checked = true;
    document.querySelectorAll('tbody input[type="checkbox"]').forEach(item => {
      if (!item.checked) {
        document.querySelector('thead input[type="checkbox"]').checked = false;
      }
    })



  })
// head 체크 박스의 값 => false,
// body 체크 박스의 값 중의 하나가 false => 변경 (반복문)




  // 간략화 예시 btn.addEventListener('click', (e) => e.stopPropagation()); // 상위 이벤트의 요소를 차단하겠습니다.
  // 
  td.appendChild(btn);
  tr.appendChild(td);


  for (let prop in friendInfo) {
    let td = document.createElement('td');
    let fname = friendInfo[prop];
    td.innerHTML = fname;
    tr.appendChild(td);
  } // 자료 불러오는 기능임
  
  td = document.createElement('td');
  btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.setAttribute('class', 'btn btn-danger'); // 태그에 attribute 를 추가 
  btn.addEventListener('click', (e) => { // 삭제버튼에 클릭 이벤트 등록
    e.target.parentElement.parentElement.remove();
  }) // 상위요소로의 이벤트 전파 차단 (버블링 캡처링) / 삭제버튼을 눌렀지만 해당 td를 눌렀을 때 위의 입력창에 입력되는 기능까지 구현됨 그걸 방지하기 위함
  // 3번째 매개값의 의미 : bubbling / capturing 중 선택 / 디폴트값 : false
  td.appendChild(btn); // 부모자식간 관계 생성
  tr.appendChild(td); // 부모자식간 관계 생성

  return tr;
}
// 자료 불러오는 기능임


// friendList.forEach((e) => {
//   document.querySelector('#list').appendChild(makeRow(e));
// });

//data.js

//배열을 활용해 친구목록 출력 

// let tr = document.createElement('tr');
// 
// tr.appendChild(td);

// console.log(document.querySelector('#myRange').value);
//추가버튼에 이벤트 
document.querySelector('button.btn.btn-primary') // 버튼 태그의 클래스명 btn btn-primary
  .addEventListener('click', (e) => {
    // tr>td*3 (tr 아래에 td 3개 만든다는 뜻)
    // tr은 하나만 추가 / td는 3개 추가 

    let fname = document.querySelector('input[name="friendName"]').value;
    let fPhone = document.querySelector('select[name="friendPhone"]').value;
    let fbirth = document.querySelector('input[name="friendBirth"]').value;
    let fblood = document.querySelector('select[name="bloodType"]').value;
    // let fblood = document.querySelector('#myRange').value = this.children[4].innerHTML;

    if (!fname || !fPhone || !fbirth || !fblood) {
      alert('필수 값을 입력하세요.')
      return;
    }
    let param = {
      name: fname,
      phone: fPhone,
      birth: fbirth,
      blood: fblood
    }

    // td.appendChild(btnt);
    // document.querySelector('#list').appendChild(btnt);


    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    // 입력값 초기화 
    document.querySelector('input[name="friendName"]').value = '';
    document.querySelector('select[name="friendPhone"]').value = '';
    document.querySelector('input[name="friendBirth"]').value = '';
    document.querySelector('select[name="bloodType"]').value = '';
  });







// document.querySelector('button.btn.btn-danger').addEventListener('click', (e) => {
//   // #list 중 input 중에서 check박스인 걸 가져와야 함. // item : input
//   document.querySelectorAll('#list tr').forEach((item) => {
//     if (item.children[0].children[0].checked == true) {
//       item.remove();
//     }
//   });
// });

// // 숙제~ thead의 체크박스를 누르면 모든 체크박스가 선택되게 만들기 
// // 이벤트 click 보다 change 사용하기~ > 자식 요소 / 공백 : 그 중 하나라도 있으면 가져옴 

// // 전체선택 
// // 전체 선택 중 아래 요소가 체크 풀리면 맨 위 체크표시도 사라지게 

// document.querySelector('thead input[type="checkbox"]').addEventListener('change', (e) => {

//   // input 태그의 타입이 checked일 때 파악 (true = 체크됨) click(:바뀐 뒤의 값)...? 
//   // 대상 변경: tbody input[type="checkbox"] 
//   // 아래에 해당되는 모든 요소들을 추출해 반복시킴
//   document.querySelectorAll('tbody input[type="checkbox"]').forEach((item) => {
//     item.checked = e.target.checked;
//   });

// })

