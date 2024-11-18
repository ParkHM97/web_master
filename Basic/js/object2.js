// object2.js
// 함수 : function 
// 함수 실행 (함수 호출)  
// friendListFnc(); // 호출 

let f1 = {name:'홍길동', age: 20};
let f2 = {name:'김길동', age: 21};
let f3 = {name:'박길동', age: 22};
let f4 = {name:'최길동', age: 23};

let myFriends = [f1, f2, f3, f4];
friendListFnc();
// 함수 정의 => 실행은 호출을 통해서 
function friendListFnc() {
  console.log('friendListFnc()');
  let newName = document.querySelector('#name').value; 
  let newAge = document.querySelector('#age').value; 
  // myFriends.push({name: newName, age: newAge});
  if (newAge != '' && newName != '') {
    myFriends.push({name: newName, age: newAge});
  }

  let html = `<table border='2'>`;  //<thead><th>이름</th></thead><tbody><tr><td>홍길동</td></tr>
                                      // <tr><td>김길동</td></tr><tr><td>박길동</td></tr><tr><td>최길동</td></tr></tbody></table>`
  
html += `<thead><tr><th>이름</th><th>나이</th></tr></thead>`;
html += `<tbody>`;
for (let i = 0; i < myFriends.length; i++) {
  html += '<tr><td>' + myFriends[i]['name'] + '</td><td>' + myFriends[i]['age'] + '</td></tr>';
}
html += '</tbody></table>';

document.querySelector('#show').innerHTML = html;
}