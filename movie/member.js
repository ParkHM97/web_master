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
  pcode: 'M01',
  moviename: 'Sound of Music',
  days: '1969년 10월',
  score: '★9.60',
  image: 'sound.jpg',
  genre: '드라마, 뮤지컬'
  },
  {
  pcode: 'M02',
  moviename: '하울의 움직이는 성',
  days: '2004년 11월',
  score: '★9.35',
  image: 'howl.jpg',
  genre: '판타지'
  },
  {
  pcode: 'M03',
  moviename: '청설',
  days: '2024년 11월',
  score: '★8.52',
  image: 'cheong.jpg',
  genre: '로맨스'
  },
  {
  pcode: 'M04',
  moviename: '천공의 성 라퓨타',
  days: '1986년 08월',
  score: '★8.70',
  image: 'Rafuta.jpg',
  genre: '판타지'
  },
  {
  pcode: 'M05',
  moviename: '파묘',
  days: '2024년 02월',
  score: '★8.21',
  image: 'pamyo.jpg',
  genre: '오컬트'
  },
  {
  pcode: 'M06',
  moviename: '명량',
  days: '2014년 07월',
  score: '★8.88',
  image: 'myeong.jpg',
  genre: '사극'
  }]


  const mosum = [{
    pcode: 'M01',
    moviename: 'Sound of Music',
    moviesum: `<p style="font-size:15px" margin-bottom="10px">Sound of Music</p>
  <p>관람객 평점<span style="color: red;">(★9.60)</span></p>
  <p>영화 소개</p>
  <p>음악을 사랑하는 말괄량이 견습 수녀 ‘마리아’는 원장 수녀의 권유로 해군 명문 집안
    폰 트랩가의 가정교사가 된다. ‘마리아’는 좀처럼 마음의 문을 열지 않는 폰 트랩가의
    일곱 아이들에게 노래를 가르치며 점차 교감하게 되고, 엄격한 ‘폰 트랩 대령’ 역시 마음의
    문을 열게 된다. 그러던 어느 날, ‘마리아’는 자신이 ‘폰 트랩 대령’을 사랑하고 있다는
    사실을 깨닫게 되고, 자신만의 비밀을 간직한 채 아이들의 곁을 떠나 다시 수녀원에
    들어가기로 결심하는데…
  </p>`
  },
  {
    pcode: 'M02',
    moviename: '하울의 움직이는 성',
    moviesum: `<p style="font-size:15px" margin-bottom="10px">하울의 움직이는 성</p>
  <p>관람객 평점<span style="color: red;">(★9.35)</span></p>
  <p>영화 소개</p>
  <p>어느 날, 영문도 모른 채 마녀의 저주로 인해 할머니가 된 
    소녀 '소피'<br>
    절망 속에서 길을 걷다가 거대한 마법의 성에 들어가게 된다.<br> 
    그곳에서 자신과 마법사 하울의 계약을 깨주면 저주를 풀어주겠다는 <br>
    불꽃악마 캘시퍼의 제안을 받고 청소부가 되어 ‘움직이는 성’에 머물게 되는데…
  </p>`
  },
  {
    pcode: 'M03',
    moviename: '청설',
    moviesum: `<p style="font-size:15px" margin-bottom="10px">청설</p>
  <p>관람객 평점<span style="color: red;">(★8.52)</span></p>
  <p>영화 소개</p>
  <p>손으로 설렘을 말하고 가슴으로 사랑을 느끼는,<br> 
    청량한 설렘의 순간 대학생활은 끝났지만 하고 싶은 것도,<br> 
    되고 싶은 것도 없어 고민하던 '용준'. <br> 
    엄마의 등쌀에 떠밀려 억지로 도시락 배달 알바를 간 '용준'은 <br> 
    완벽한 이상형 '여름'과 마주친다. 부끄러움은 뒷전, 첫눈에 반한 '여름'에게 <br> 
    '용준'은 서툴지만 솔직하게 다가가고 여름의 동생 '가을'은 '용준'의 <br> 
    용기를 응원한다. 손으로 말하는 '여름'과 더 가까워지기 위해 <br> 
    더 잘 듣기보단 더 잘 보고 느끼려 노력하지만, <br> 
    마침내 가까워졌다 생각하던 찰나 '여름'은 왜인지 자꾸 '용준'과 멀어지려 하는데…
  </p>`
  },
  {
    pcode: 'M04',
    moviename: '천공의 성 라퓨타',
    moviesum: `<p style="font-size:15px" margin-bottom="10px">천공의 성 라퓨타</p>
  <p>관람객 평점<span style="color: red;">(★8.70)</span></p>
  <p>영화 소개</p>
  <p>조용한 밤하늘을 가로지르는 한 척의 비행선이 해적의 습격을 받는다. <br> 
    그 때, 비행선에 타고 있던 한 소녀가 떨어진 목걸이를 목에 걸고, 해적에게 잡히지 않게 <br> 
    피하다가 비행선에서 떨어지게 된다. 한편 마을의 광산에서 일하는 소년 파즈는 갑자기 <br> 
    말썽을 일으키는 기계를 수습하다가 하늘에서 한 소녀가 푸른 빛과 함께 천천히 <br> 
    떨어지는 것을 목격한다. 깨어난 소녀 '소피'는 파즈와 곧 친해지고, <br> 
    천공의 성 라퓨타에 대한 이야기를 시작한다.</p>`
  },
  {
    pcode: 'M05',
    moviename: '파묘',
    moviesum: `<p style="font-size:15px">파묘</p>
  <p>관람객 평점<span style="color: red;">(★8.21)</span></p>
  <p>영화 소개</p>
  <p> 미국 LA, 거액의 의뢰를 받은 무당 화림과 봉길은 기이한 병이 대물림되는 <br>  
    집안의 장손을 만난다. 조상의 묫자리가 화근임을 알아챈 화림은 이장을 권하고, <br> 
    돈 냄새를 맡은 최고의 풍수사 상덕과 장의사 영근이 합류한다.<br> 
    “전부 잘 알 거야… 묘 하나 잘못 건들면 어떻게 되는지.”<br>
    절대 사람이 묻힐 수 없는 악지에 자리한 기이한 묘. <br> 
    상덕은 불길한 기운을 느끼고 제안을 거절하지만, 화림의 설득으로 결국 파묘가 시작되고… <br> 
    <br>나와서는 안될 것이 나왔다.</p>
   `
  },
  {
    pcode: 'M06',
    moviename: '명량',
    moviesum: `<p style="font-size:15px" margin-bottom="10px">명량</p>
  <p>관람객 평점<span style="color: red;">(★8.88)</span></p>
  <p>영화 소개</p>
  <p> 1597년 임진왜란 6년, 오랜 전쟁으로 인해 혼란이 극에 달한 조선.
     무서운 속도로 한양으로 북상하는 왜군에 의해 국가존망의 위기에 처하자 
     누명을 쓰고 파면 당했던 이순신 장군(최민식)이 삼도수군통제사로 재임명된다.
     하지만 그에게 남은 건 전의를 상실한 병사와 두려움에 가득 찬 백성, 그리고 12척의 배 뿐. 
     마지막 희망이었던 거북선마저 불타고 잔혹한 성격과 뛰어난 지략을 지닌 용병 구루지마가 
     왜군 수장으로 나서자 조선은 더욱 술렁인다. 330척에 달하는 왜군의 배가 속속 집결하고 
     압도적인 수의 열세에 모두가 패배를 직감하는 순간, 이순신 장군은 단 12척의 배를 
     이끌고 명량 바다를 향해 나서는데…! 
     <br>12척의 조선 vs 330척의 왜군 역사를 바꾼 위대한 전쟁이 시작된다!</p>
    `
  }]
  const moviecart = [{
    userid: 'user01',
    moviename: '하울의 움직이는 성',
    Price: 12000,
    image: 'howl.jpg',
    age: 'adult',
    qty: 1
  },
  {
    userid: 'user01',
    moviename: '하울의 움직이는 성',
    Price: 8000,
    image: 'howl.jpg',
    age: 'child',
    qty: 2
  },
  {
    post: 'user02',
    moviename: '청설',
    Price: 12000,
    image: 'cheong.jpg',
    age: 'adult',
    qty: 2
  },
  {
    post: 'user03',
    moviename: '파묘',
    Price: 12000,
    image: 'pamyo.jpg',
    age: 'adult',
    qty: 3
  },
  {
    post: 'user03',
    moviename: '천공의 성 라퓨타',
    Price: 8000,
    age: 'child',
    qty: 2
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