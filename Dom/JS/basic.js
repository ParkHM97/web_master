   // basic.js
   
   
   
   //document object : 객체 (속성, 메소드)
    let ulDom = document.querySelector('ul'); // ul을 선택해 옴 (하위요소까지)
    // ulDom.children (자식 속성)
   // console.log(ulDom.children); // 첫번째 요소 접근 : ulDom.children[0]
   console.log(ulDom.children[0].innerHTML); // ulDom (ul) 자식 중 0번째 li의 태그 안의 속성을 불러옴

   // * 요소 추가 * 
  //  let children = ulDom = document.querySelector('ul').innerHTML;
  //  children += '<li>자몽</li>';
  //  document.querySelector('ul').innerHTML = children;

  // DOM 객체에는 메소드(객체 생성 메소드 : createElement())가 있다
  // 위의 ul li에 <li>자몽</li>이라는 태그를 추가하고자 한다 
  // li과 </ul> 사이에 <li>자몽</li> 을 넣어야 함 (append)
// create Element : 만들고 싶은 객체 넣기 (li 태그 등)
  let liTag = document.createElement('li'); // <li> 요소를 생성 (새로운 요소 생성)
  liTag.innerHTML = '자몽'; // 속성 추가 (태그 사이에 값 추가)
  ulDom.appendChild(liTag); // ulDom 요소의 자식 요소로 liTag를 등록함 (요소를 어디에 출력할 것인가) 
  // 결과 : body 태그의 ul 아래 li에 새 요소를 추가한 것과 동일한 값이 나타남
  // document.querySelector('body').appendChild(liTag); // liTag를 body의 자식 요소로 등록함
// 1-1 (실습)
  let pTag = document.createElement('p');
  pTag.innerHTML = 'Welcome';
  //document.querySelector('#show').appendChild(pTag); 
  show.appendChild(pTag);
  
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  // ButtonTag.innerText = '<b>삭제</b>'; // innerHTML과 innerText의 차이? innerText는 태그가 들어가면 태그로 
    // 처리해 줌, 그러나 innerText에서는 <b> 등의 태그를  삽입하면 태그 또한 텍스트로 인식함 
  btn.addEventListener('click', (e) => { // button태그에 이벤트 삽입 (화살표 함수...)
   // console.log(e.target.previousElementSibling);
    // document.querySelector(ulDom.children[0].remove()); // previousElementSibling : 이전요소 (형제 요소 중 먼저 나온 것) previousElementSibling.remove() 삭제함
    document.querySelector('ul').children[0].remove();
    // document.querySelector('ul>li:nth-of-type(1)').remove(); // css 방법 
  }) // p태그 출력

  document.querySelector('#show').appendChild(btn);