//T20241120.js
function makeRow(bookInfo = {
  bookCode,
  bookName,
  author,
  press,
  price
}) {

  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) {
    console.log(this.children[1].innerHTML);
    document.querySelector('input[name="bookCode"]').value = this.children[1].innerHTML;
    console.log(this.children[2].innerHTML);
    document.querySelector('input[name="bookName"]').value = this.children[2].innerHTML;
    console.log(this.children[3].innerHTML);
    document.querySelector('input[name="author"]').value = this.children[3].innerHTML;
    console.log(this.children[4].innerHTML);
    document.querySelector('input[name="press]').value = this.children[4].innerHTML;
    console.log(this.children[5].innerHTML);
    document.querySelector('input[name="price"]').value = this.children[5].innerHTML;
  })

  let td = document.createElement('td');
  let btn = document.createElement('input');
  btn.setAttribute('type', 'checkbox')
  btn.addEventListener('click', e => {
    e.stopPropagation();
    let chks = document.querySelectorAll('tbody input[type="checkbox"]')
    let chked = document.querySelectorAll('tbody input[type="checkbox"]:checked');
   
    if (chks.length == chked.length) {
      document.querySelector('tbody input[type="checkbox"]').checked = true;
    } else {
      document.querySelector('tbody input[type="checkbox"]').checked = false;
    }
  })

  btn.addEventListener('change', e => {
    document.querySelector('tbody input[type="checkbox"]').checked = true;
    document.querySelectorAll('tbody input[type="checkbox"]').forEach(item => {
      if (!item.checked) {
        document.querySelector('tbody input[type="checkbox"]').checked = false;
      }
    })
  })

  td.appendChild(btn);
  tr.appendChild(td);


  for (let prop in bookInfo) {
    let td = document.createElement('td');
    let bookName = bookInfo[prop];
    td.innerHTML = bookName;
    tr.appendChild(td);

  }
  td = document.createElement('td');
  btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', (e) => { 
    e.target.parentElement.parentElement.remove();
  }) 
  
  td.appendChild(btn); 
  tr.appendChild(td);

  return tr;
}
bookList.forEach((e) => {
  document.querySelector('#list').appendChild(makeRow(e));
})

document.querySelector('#save') // 
  .addEventListener('click', (e) => {

    let bookCode = document.querySelector('#bookCode').value;
    let bookName = document.querySelector('#bookName').value;
    let author = document.querySelector('#author').value;
    let press = document.querySelector('#press').value;
    let price = document.querySelector('#price').value;



    if (!bookCode || !bookName || !author || !press || !price) {
      alert('필수 값을 입력하세요.')
      return;
    }
    let param = {
      bookCode,
      bookName,
      author,
      press,
      price
    }

    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    document.querySelector('input[name="bookCode"]').value = '';
    document.querySelector('input[name="bookName"]').value = '';
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('input[name="press"]').value = '';
    document.querySelector('input[name="price"]').value = '';
  })



document.querySelector('input[type="checkbox"]').addEventListener('change', e => {
  document.querySelectorAll('input[type="checkbox"]').forEach((item) => {
    item.checked = e.target.checked;
  })
})

// 저장버튼을 클릭했을 때 아래 list에 tr td를 생성하고 td에 input의 value를 삽입
// document.querySelector('#save').addEventListener('click', e => {
//   for(let i = 0; i < )
//   let tr = document.createElement('tr');
//   let td = document.createElement('td');
//   document.querySelector('#list').appendChild(tr);
//   tr.appendChild(td);
//   document.querySelector('#list > tr').innerHTML = document.querySelector('#booknum').value;
// })

// }















// let dbooknum = document.querySelector('input[name="booknum"]').value;
// let dbookname = document.querySelector('input[name="bookname"]').value;
// let dwriter = document.querySelector('input[name="writer"]').value;
// let dbookmake = document.querySelector('input[name="bookmake"]').value;

// let list = {
//   booknum = dbooknum;
//   bookname = dbookname;
//   writer = dwriter;
//   bookmake = dbookmake;