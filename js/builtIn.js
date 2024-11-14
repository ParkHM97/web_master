// builtIn.js (내장객체)
// 날짜 (Date 객체)

let today = new Date(); //Date 객체 
today.setFullYear(2023); // set~ 메소드 : 값을 지정함
today.setMonth(4); // 5월 
today.setDate(31); // 날짜 (31일) / day : 요일 

// today.setFullYear(2023, 4, 31);
console.log(today.getFullYear()); // 년도 함수 안에 포함되어 있는 객체 : 메소드 
console.log(`월: ${today.getMonth() + 1}, 날짜: ${today.getDate()},요일: ${today.getDay()}`); // 1월이 0부터 시작함, 월요일이 0임 
// today.getHours() + today.getMinutes() + today.getSeconds();

function showTime(time = new Date) { // 값을 안 넣으면 현재 시간 (new Date) // 디폴트값 반환
  // 2024-11-13 14:22:23
  let yyyy = time.getFullYear(); // 2024
  let MM = time.getMonth() + 1; // 11월
  let dd = time.getDate(); // 날짜 // 14일 
  let HH = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds(); //number 타입
  console.log(('' + ss).length); // number 타입에는 length 타입이x / ''(문자열) 과 더하기 연산하면 ss 도 길이 확인 가능
  ss = ('' + ss).length == 1 ? '0' + ss : ss; //05 초 와 같이 앞에 0을 붙여주려고,.. // 간단한 if 함수 ( ? : ) 사용
  let ww = time.getDay();
  let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss + ' ' + days[ww];
} console.log(showTime(today));