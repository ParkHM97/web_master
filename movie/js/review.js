
// let plus = document.querySelector('.btn').addEventListener('click', e => {
//   // console.log(e);
//   let tr = document.createElement('tr');
//   let td = document.createElement('td');
//   let reviewtd = document.querySelector('.int').value;
//   let moviename = document.querySelector('select').value;
//   let vudwja = document.querySelector('.slider').value;
//   console.log(td)
//   td.innerHTML = reviewtd
//   tr.appendChild(td);
// }) 

// document.querySelector('#list').appendChild(tr);

// function newElement() {
//   let newtr = document.createElement('tr');
//   let newtd = document.createElement('td');
//   newtd.innerText = document.querySelector('.int').value;
//   newtr.appendChild(newtd);
//   document.querySelector('#list').appendChild(newli);
//   let span = document.createElement('span');
//   span.innerText = '×';
//   span.setAttribute('class', 'close');
//   newli.appendChild(span);

//   newli.addEventListener('click', e => {
//           // console.log(e.target);
//     // li 영역, span 영역 구분해야... 
//     if(e.target.tagName == "LI"){
//     // console.log(li.getAttribute('class')); // getAttribute : 속성을 가져옴 / setAttribute : 속성을 추가함
//     if(newli.getAttribute('class', 'checked')){   // null : 체크되지 않은 걸 의미함 // checked : 체크됨  
//       newli.setAttribute('class', 'null');  // null이 반환되면 check로 바꾸고 
//     } else {
//       newli.setAttribute('class', 'checked'); // check가 반환되면 null로 바꿈
//     }
//   } else if (e.target.tagName == "SPAN") {
//    newli.style.display = 'none'; 
//   }
//   })
// };

// // 위의 입력창에 입력하면 아래 li에 appendChild 예정
// document.querySelectorAll('ul li').forEach(li => {
//   let span = document.createElement('span');
//   span.innerText = '×';
//   span.setAttribute('class', 'close'); 
//   li.appendChild(span); // li 자식 요소로 span 삽입
//   // li 태그에 이벤트 등록 (클릭)
//   li.addEventListener('click', (e) => {
//     // console.log(e.target);
//     // li 영역, span 영역 구분해야... 
//     if(e.target.tagName == "LI"){
//     // console.log(li.getAttribute('class')); // getAttribute : 속성을 가져옴 / setAttribute : 속성을 추가함
 
//     if(li.getAttribute('class') == null || li.getAttribute('class') == 'null'){   // null : 체크되지 않은 걸 의미함 // checked : 체크됨  
//       li.setAttribute('class', 'checked');  // null이 반환되면 check로 바꾸고 
//     } else {
//       li.setAttribute('class', null); // check가 반환되면 null로 바꿈
//     }
//   } else if (e.target.tagName == "SPAN") {
//    li.style.display = 'none'; 
//   }
//   })
// })

// function newElement() {

  // document.querySelector('.btn').addEventListener('click', e => {

  //   let newli = document.createElement('li');
  //   newli.innerText = document.querySelector('.int').value;
  //   document.querySelector('#list').appendChild(newli); // 기억하자... 텍스트가 들어갈 html 영역이 반드시 존재해야 한다. 
  // })

  document.querySelector('.btn').addEventListener('click', e => {

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    tr.appendChild(td)
    td.innerText = document.querySelector('.int').value;
    document.querySelector('#list').appendChild(td); // 기억하자... 텍스트가 들어갈 html 영역이 반드시 존재해야 한다. 
  })