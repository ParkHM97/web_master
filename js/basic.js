//basic.js
//변수 : 메모리 상 주소(23dfaadd)에 이름을 붙이는 것  
let name = "홍길동"; // 23dfaadd에 있는 홍길동을 불러옴 / string 타입 
var age = 20;       // var : 어디든 선언 할 수 있음 (자유로움), 다른 값을 새로 변수로 지정하면 덮어쓰임 
console.log(age);   // let : 다시 선언할 수 없음 
console.log(name);

var age = 30;
console.log(age);
// let name = "친구"; 개발자에게 에러가 날 수 있는 코드를 확인할 수 있음 (코드가 길어지면 불편함)

//변수에는 값을 담을 수 있는 유형이 존재함 (데이터 타입)
let num = 10; // 숫자 타입 
let isOk = true; //Boolean 타입 
console.log(typeof name); //console.log(typeof 변수명) : 변수의 타입 확인
console.log(typeof num); // 데이터는 뒤에 따라붙는 값에 따라 타입이 결정된다. 변수 이름은 마음대로 지정할 수 있음 
console.log(typeof isOk);

// 위와 같이 값을 하나만 담을 수 있는 타입 : 원시 데이터 타입 

// 복합 데이터 타입 속성 여러 개 : {} 증괄호로 선언 

let obj = {name: "홍길동", age: 20, height: 170} //object 타입 
console.log(obj.name); //obj에서 name 속성을 가진 값을 출력하겠습니다. 이름은 : 홍길동
console.log(obj.age); //obj에서 age 속성을 가진 값을 출력하겠습니다. 나이는 : 20 살  

console.log("이름은: " + obj.name);
console.log("나이는: " + obj.age + " 살");
console.log('나이는: ' + obj["age"] + ' 살'); // 같은 표현 방식 

num = 20; 
isOk = false;
name = "친구";
obj = {name: "한국", age: 22}

num = true; // 타입을 바꿔도 무관 . . .
isOk = 30;
name = 50;

//변수 지정2//
const num1 = 10; //변하지 않는 고정값 
// num1 = 20; 고정된 변수로 사용하고 싶을 때 (에러 발생함)
const pi = 3.14;
console.log(2 * 4 * pi);

// pi = 4;
// console.log(2 * 4 * pi);

// var : 중복 선언 O 재할당 O 
// let : 중복 선언 X 재할당 O 
// const : 중복 선언 X 재할당 X (변하지 않는 값 ex-공식 등)

let countPerStudent;

// 변수 : 연산 가능 
let number1 = 100;
let result = 10;

//result = number1 + 20; // result에 10이 있는 것과 관계 없이 결과값은 result가 출력된다. 130이 되려면 result = result + number1 + 10;
//console.log(result); 

let message = "Welcome ";
//result = message + number1 + 20; // concatenate 두 변수를 연결함 
//console.log(result); // 왼쪽부터 계산해서, Welcome 100, 그리고 Welcome이라는 문자가 됨, 뒤의 20은 추가로 더해져서 결과 :Welcome 10020

// 120으로 출력되게 하려면 괄호로 숫자 연산을 묶어야 한다.

result = message + (number1 + 20);
console.log(result);
// Welcome 120 출력

result = message - number1; // NaN (연산이 되지 않음 / Not a Number)
console.log(result);
console.log(typeof result); // 근데 타입은 number로 출력된다.

// let inputValue = p1rompt('이름을 입력하세요'); //prompt : 사용자가 입력한 값을 저장
// console.log(message + inputValue); // 콘솔 로그에 출력 (웹 페이지 f12)
// document.write('<h1>' + message + inputValue + '</h1>'); // document html 화면에 출력 

// let friends;
// console.log(typeof friends); //undefined : 변수만 선언되어 있고 값은 할당 X

//타입별 디폴트 초기값 
// >> let num2 = 0, friendname = "", over30 = false, obj1 = null;

let friends = null; // 아무 값도 없는 상태 (데이터 타입 : object)
friends = ['김', '길', '동']; 
console.log(typeof friends);
console.log(friends);
console.log(friends[0]); // 셋 중 하나만 가져올 때 / 배열의 순번(인덱스)는 0부터 시작!

let inputValue = prompt('인덱스를 입력하세요'); //prompt : 사용자가 입력한 값을 저장
console.log(inputValue + '번째 인덱스 이름은 ' + friends[inputValue] + '입니다');