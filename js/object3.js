// object3.js

let person = {
  name: "박민수",
  birth: "2000-04-05", // 속성
  bloodtype: 'A',
  showInfo: function () { // this = 객체 자기 자신을 가리킴 & 객체 소속의 함수 => 메소드
    console.log(`이름은 ${this.name}이고, 생일은 ${this.birth} 입니다.`);
  }
}

person.showInfo(); // 메소드 호출

Math.round(12.5); // 메소드 실행 (math = 수학 연산과 관련) 
Math.random(); // 0 ~ 1 사이의 임의 실수 반환 (0이 될 수 있음, 1은 포함 x)
console.log(Math.PI); // Math = 속성 / () 메소드 

for (let i = 1; i <= 5; i++) {
  console.log(parseInt(Math.random() * 10 + 1)); 
}

// while 반복문 

let i = 0; 
while(i < 5) {
  console.log('i의 값은 ' + i);
  i++;
}

// 어떤 조건을 만족할 동안에만 반복을 실행함 
while(true) { // 무한으로 반복시킴 (while true만 쓰면,,,)
  console.log(i++)
  if (parseInt(Math.random() * 10 + 1) == 5) {
    break;
  }
}

// 임의의 문자를 입력 => 콘솔 : 당신이 입력한 문자는 ??? 입니다. 
// "종료" 문자가 들어오면 반복문을 종료

i = 0;
while(inputtext = true) {
  let inputtext = prompt('임의의 문자를 입력하세요.')
  i++; // 횟수체크
  console.log(`당신이 입력한 문자는 ${inputtext} 입니다.`)
  if (inputtext == "종료" || i == 5) {
    break;
  }
}

