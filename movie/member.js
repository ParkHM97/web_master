const memberList = [{
  uname: '01사용자',
  userid: 'user01',
  userpw: 'user01'
}, 
{
  uname: '02사용자',
  userid: 'user02',
  userpw: 'user02'
},
{
  uname: '03사용자',
  userid: 'user03',
  userpw: 'user03'
}]

const movieList = [{
  moviename: 'Sound of Music',
  days: '1969년 10월',
  score: '★9.60',
  image: 'sound.jpg'
  },
  {
  moviename: '하울의 움직이는 성',
  days: '2004년 11월',
  score: '★9.35',
  image: 'howl.jpg'
  },
  {
  moviename: '오늘 밤, 세계에서 이 사랑이 사라진다 해도',
  days: '2022년 07월',
  score: '★8.75',
  image: 'today.jpg'
  },
  {
  moviename: '천공의 성 라퓨타',
  days: '1986년 08월',
  score: '★8.70',
  image: 'Rafuta.jpg'
  },
  {
  moviename: '파묘',
  days: '2024년 02월',
  score: '★8.21',
  image: 'pamyo.jpg'
  },
  {
  moviename: '명량',
  days: '2014년 07월',
  score: '★8.88',
  image: 'myeong.jpg'
  }]

  function makeRow(obj = {}) {
    let tr = document.querySelector('tr');
    for (let prop in obj) {
      let td = document.createElement('td');
      td.innerHTML = obj[prop];
      tr.appendChild(td);
    }
    return tr;
  }