document.querySelector('.btn').addEventListener('click', e => {
  let tr = document.createElement('tr');
  
  let td = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  // let tdva = document.querySelector('td').value;
  // let td2va = document.querySelector('td').value;
  // let td3va = document.cq('td').value;
  tr.appendChild(td)
  tr.appendChild(td2)
  tr.appendChild(td3)
  document.querySelector('#list').appendChild(tr);
  document.querySelector('#list').appendChild(td); // 기억하자... 텍스트가 들어갈 html 영역
  let intval = document.querySelector('.int').value;
  let movienameva = document.querySelector('.moviename').value;
  let silerva = document.querySelector('.slider').value;

  if (!intval || !movienameva || !silerva) {
    alert('후기를 입력해 주세요.')
    return;
  }
  td3.innerHTML = `<span class="gray">시청한 영화 : </span>${document.querySelector('.moviename').value}`;
  document.querySelector('#list').appendChild(td3);
  td.innerHTML = `<span class="gray">내용 : </span>${intval}`;
  document.querySelector('#list').appendChild(td); // 기억하자... 텍스트가 들어갈 html 영역이 반드시 존재해야 한다. 
  td2.innerHTML = `<span class="gray">평점 : </span>${document.querySelector('.slider').value} 점`;
  document.querySelector('#list').appendChild(td2);
  // let hr = document.createElement('hr');
  // document.querySelector(tr).appendChild(hr);
  // input value 초기화
  document.querySelector('.int').value = '';
})


// function newElement() {
//   // let newli = document.createElement('li');
//   // newli.innerText = document.querySelector('#myInput').value;
//   // document.querySelector('#myUL').appendChild(newli);
//   let span = document.createElement('span');
//   span.innerText = '×';
//   span.setAttribute('class', 'close');
//   td3.appendChild(span);

//   // newli.addEventListener('click', e => {
//   //   // console.log(e.target);
//   //   // li 영역, span 영역 구분해야... 
//   //   if (e.target.tagName == "LI") {
//   //     // console.log(li.getAttribute('class')); // getAttribute : 속성을 가져옴 / setAttribute : 속성을 추가함
//   //     if (newli.getAttribute('class', 'checked')) { // null : 체크되지 않은 걸 의미함 // checked : 체크됨  
//   //       newli.setAttribute('class', 'null'); // null이 반환되면 check로 바꾸고 
//   //     } else {
//   //       newli.setAttribute('class', 'checked'); // check가 반환되면 null로 바꿈
//   //     }
//   //   } else if (e.target.tagName == "SPAN") {
//   //     newli.style.display = 'none';
//   //   }
//   // })
// };

// document.querySelectorAll('ul li').forEach(li => {
//   let span = document.createElement('span');
//   span.innerText = '×';
//   span.setAttribute('class', 'close');
//   td3.appendChild(span); // li 자식 요소로 span 삽입
//   // li 태그에 이벤트 등록 (클릭)
//   // tr.addEventListener('click', (e) => {
//   //   // console.log(e.target);
//   //   // li 영역, span 영역 구분해야... 
//   //   if(e.target.tagName == "LI"){
//   //   // console.log(li.getAttribute('class')); // getAttribute : 속성을 가져옴 / setAttribute : 속성을 추가함

//   //   if(li.getAttribute('class') == null || li.getAttribute('class') == 'null'){   // null : 체크되지 않은 걸 의미함 // checked : 체크됨  
//   //     li.setAttribute('class', 'checked');  // null이 반환되면 check로 바꾸고 
//   //   } else {
//   //     li.setAttribute('class', null); // check가 반환되면 null로 바꿈
//   //   }
//   // } else if (e.target.tagName == "SPAN") {
//   //  li.style.display = 'none'; 
//   // }
//   // }
//   // )
// })


// function newElement() {
//   let newul = document.createElement('ul');
//   let newli = document.createElement('li');
//   newul.appendChild(newli);
//   newli.innerText = document.querySelector('.int').value;
//   document.querySelector('#myUL').appendChild(newli);
//   let span = document.createElement('span');
//   span.innerText = '×';
//   span.setAttribute('class', 'close');
//   newli.appendChild(span);

// //   newli.addEventListener('click', e => {
// //           // console.log(e.target);
// //     // li 영역, span 영역 구분해야... 
// //     if(e.target.tagName == "LI"){
// //     // console.log(li.getAttribute('class')); // getAttribute : 속성을 가져옴 / setAttribute : 속성을 추가함
// //     if(newli.getAttribute('class', 'checked')){   // null : 체크되지 않은 걸 의미함 // checked : 체크됨  
// //       newli.setAttribute('class', 'null');  // null이 반환되면 check로 바꾸고 
// //     } else {
// //       newli.setAttribute('class', 'checked'); // check가 반환되면 null로 바꿈
// //     }
// //   } else if (e.target.tagName == "SPAN") {
// //    newli.style.display = 'none'; 
// //   }
// //   }
// // )
// };


// // 위의 입력창에 입력하면 아래 li에 appendChild 예정
// document.querySelectorAll('ul li.liclose').forEach(li => {
//   let span = document.createElement('span');
//   span.innerText = '  ×';
//   span.setAttribute('class', 'close'); 
//   li.appendChild(span); // li 자식 요소로 span 삽입
//   // li 태그에 이벤트 등록 (클릭)
//   // li.addEventListener('click', (e) => {
//   //   // console.log(e.target);
//   //   // li 영역, span 영역 구분해야... 
//   //   if(e.target.tagName == "LI"){
//   //   // console.log(li.getAttribute('class')); // getAttribute : 속성을 가져옴 / setAttribute : 속성을 추가함
 
//   //   if(li.getAttribute('class') == null || li.getAttribute('class') == 'null'){   // null : 체크되지 않은 걸 의미함 // checked : 체크됨  
//   //     li.setAttribute('class', 'checked');  // null이 반환되면 check로 바꾸고 
//   //   } else {
//   //     li.setAttribute('class', null); // check가 반환되면 null로 바꿈
//   //   }
//   // } else if (e.target.tagName == "SPAN") {
//   //  li.style.display = 'none'; 
//   // }
//   // }
// //)
// })