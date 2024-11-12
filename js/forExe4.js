// forExe4.js

// let fname1 = '';
// let fname2 = '';
// let fname3 = '';
// 원시자료형 vs 복합 자료형

let fnames = []; // 배열 변수 선언 
fnames[0] = '홍길동';
fnames[1] = '김민식';
fnames[2] = '박창석';
// push(값)
fnames.push('박지희'); // 그 다음에 바로 추가 됨 (3번으로!)
// 배열의 크기 반환 : length

function addFriendFuc() {
  // 사용자의 입력값을 확인 > 목록으로 출력 
  let fname = document.querySelector('#inputValue').value;
  console.log('친구이름', fname); // sum = sum + i
  document.querySelector('#show').innerHTML = document.querySelector('#show').innerHTML + `<p>${fname}</p>`;
  fnames.push(`<p>${fname}</p>`)

  //출력 
  let str = '';
  for (let i = 0; i < fnames.length; i++) {
    str = str + fnames[i]; // 간단히 : str += fnames[i]
  } // 인덱스는 0부터 시작함 
  document.querySelector('#show').innerHTML = str;
//   console.log(fnames[1]);

}